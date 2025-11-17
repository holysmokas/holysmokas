/**
 * deployProject.js
 * Automatically selects boilerplate based on package type and generates AI code
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";
import { generateProjectCode, deployToGitHub } from "./utils/github.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** Sanitize project name for npm */
function sanitizeProjectName(name) {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9-_~.]/g, "-")
        .replace(/^-+|-+$/g, "")
        .substring(0, 214);
}

/** Copy directory recursively */
function copyRecursive(src, dest) {
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            fs.mkdirSync(destPath, { recursive: true });
            copyRecursive(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

/**
 * Determine which boilerplate to use based on package selection
 * Returns: { boilerplatePath, category, useBoilerplate }
 */
function selectBoilerplate(packageType) {
    const generatorsBase = path.resolve(__dirname, "./generators");

    // Normalize package string (remove price and extras)
    const normalizedPackage = packageType.toLowerCase();

    if (normalizedPackage.includes("starter")) {
        return {
            boilerplatePath: path.join(generatorsBase, "starterWebsite"),
            category: "landing-page",
            useBoilerplate: true,
            description: "Simple landing page with hero, features, and contact form"
        };
    }
    else if (normalizedPackage.includes("business")) {
        return {
            boilerplatePath: path.join(generatorsBase, "businessWebsite"),
            category: "business",
            useBoilerplate: true,
            description: "Multi-page professional business website with services, about, and portfolio"
        };
    }
    else if (normalizedPackage.includes("small shop") || normalizedPackage.includes("smallshop")) {
        return {
            boilerplatePath: null,
            category: "e-commerce",
            useBoilerplate: false,
            description: "Fully functional e-commerce shop with admin panel generated entirely by AI"
        };
    }
    else if (normalizedPackage.includes("custom") || normalizedPackage.includes("enterprise")) {
        return {
            boilerplatePath: null,
            category: "custom",
            useBoilerplate: false,
            description: "Fully custom website generated entirely by AI based on requirements"
        };
    }
    else {
        console.log("⚠️ Unknown package type, defaulting to Business template");
        return {
            boilerplatePath: path.join(generatorsBase, "businessWebsite"),
            category: "business",
            useBoilerplate: true,
            description: "Multi-page professional business website"
        };
    }
}

/** Parse AI response and extract code blocks */
function parseCodeBlocks(generatedCode) {
    const files = [];
    const codeBlockRegex = /```(?:javascript|jsx|js|html|css|json|bash)?\s*(?::|\s+)?\s*([^\n`]+)?\n([\s\S]*?)```/g;
    let match;

    while ((match = codeBlockRegex.exec(generatedCode)) !== null) {
        let filename = match[1]?.trim();
        const content = match[2]?.trim();

        if (!filename || !content) continue;

        filename = filename
            .replace(/^(bash|sh|File|file)[\s:]+/i, '')
            .replace(/^on[\s:]+/i, '')
            .trim();

        if (filename && /\.(jsx?|html|css|json|ts|tsx|yml|yaml)$/i.test(filename)) {
            files.push({ path: filename, content });
            console.log(`  ✓ Parsed: ${filename}`);
        }
    }

    return files;
}

/** Generate package-lock.json */
function generatePackageLock(projectPath) {
    try {
        console.log("🔒 Generating package-lock.json...");
        execSync("npm install --package-lock-only", {
            cwd: projectPath,
            stdio: "pipe",
        });

        const lockFilePath = path.join(projectPath, "package-lock.json");
        if (fs.existsSync(lockFilePath)) {
            console.log("✅ package-lock.json generated successfully");
            return true;
        }
    } catch (error) {
        console.warn("⚠️ Could not generate package-lock.json:", error.message);
    }
    return false;
}

/** Create GitHub Actions workflow */
function createGitHubActionsWorkflow() {
    return `name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4`;
}

/** Main deployment function */
export async function deployProject(formData) {
    try {
        console.log("⚙️ Starting deployment for:", formData.name);
        console.log("📦 Package type:", formData.category);

        const safeName = sanitizeProjectName(formData.name);
        const repoName = `${safeName}-${Date.now()}`;
        const outputPath = path.resolve(__dirname, `../generated-sites/${safeName}`);

        const boilerplateConfig = selectBoilerplate(formData.category || "business");
        console.log("📋 Selected boilerplate:", boilerplateConfig.boilerplatePath || "NONE (Custom Generation)");
        console.log("🏷️ Category:", boilerplateConfig.category);

        if (fs.existsSync(outputPath)) {
            console.log("🧹 Removing old generated folder...");
            fs.rmSync(outputPath, { recursive: true, force: true });
        }

        fs.mkdirSync(outputPath, { recursive: true });

        if (boilerplateConfig.useBoilerplate && boilerplateConfig.boilerplatePath) {
            if (!fs.existsSync(boilerplateConfig.boilerplatePath)) {
                throw new Error(`Boilerplate not found: ${boilerplateConfig.boilerplatePath}`);
            }

            console.log("📦 Copying boilerplate from:", boilerplateConfig.boilerplatePath);
            copyRecursive(boilerplateConfig.boilerplatePath, outputPath);
            console.log("✅ Boilerplate copied");
        } else {
            console.log("🎨 AI Generation: Creating minimal structure for full AI generation");
            fs.mkdirSync(path.join(outputPath, "src"), { recursive: true });
            console.log("✅ Minimal structure created - AI will generate all files");
        }

        console.log("🤖 Generating AI code...");
        const generatedCode = await generateProjectCode({
            name: formData.name,
            description: formData.description,
            category: boilerplateConfig.category,
            packageType: formData.category,
            useBoilerplate: boilerplateConfig.useBoilerplate,
            boilerplateDescription: boilerplateConfig.description
        });

        if (!generatedCode) {
            throw new Error("Failed to generate project code from AI");
        }

        const parsedFiles = parseCodeBlocks(generatedCode);
        if (parsedFiles.length > 0) {
            console.log(`📝 Found ${parsedFiles.length} AI-generated files`);
            for (const file of parsedFiles) {
                const fullPath = path.join(outputPath, file.path);
                const dir = path.dirname(fullPath);
                if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir, { recursive: true });
                }

                if (file.path === 'vite.config.js') {
                    let viteContent = file.content;
                    if (!viteContent.includes('base:')) {
                        viteContent = viteContent.replace(
                            /(plugins:\s*\[.*?\])/s,
                            `$1,\n  base: '/${repoName}/'`
                        );
                    } else {
                        viteContent = viteContent.replace(/base:\s*['"].*?['"]/, `base: '/${repoName}/'`);
                    }
                    fs.writeFileSync(fullPath, viteContent, "utf8");
                    console.log(`  ✅ Wrote: ${file.path} (with base path)`);
                } else {
                    fs.writeFileSync(fullPath, file.content, "utf8");
                    console.log(`  ✅ Wrote: ${file.path}`);
                }
            }
        } else {
            console.log("⚠️ No AI files parsed, using boilerplate as-is");
        }

        const viteConfigPath = path.join(outputPath, "vite.config.js");
        if (fs.existsSync(viteConfigPath)) {
            let viteConfig = fs.readFileSync(viteConfigPath, "utf8");
            viteConfig = viteConfig.replace(/{{projectName}}/g, repoName);

            if (!viteConfig.includes(`base: '/${repoName}/'`)) {
                viteConfig = viteConfig.replace(/base:\s*['"].*?['"]/g, '');
                viteConfig = viteConfig.replace(
                    /(plugins:\s*\[.*?\])/s,
                    `$1,\n  base: '/${repoName}/'`
                );
            }

            fs.writeFileSync(viteConfigPath, viteConfig);
            console.log(`⚙️ Updated vite.config.js with base: /${repoName}/`);
        }

        const packageJsonPath = path.join(outputPath, "package.json");
        if (fs.existsSync(packageJsonPath)) {
            const pkg = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
            pkg.name = repoName;
            pkg.homepage = `https://${process.env.GIT_USERNAME}.github.io/${repoName}/`;
            fs.writeFileSync(packageJsonPath, JSON.stringify(pkg, null, 2));
            console.log(`✅ Updated package.json`);
        }

        const tailwindConfigPath = path.join(outputPath, "tailwind.config.js");
        if (fs.existsSync(tailwindConfigPath)) {
            let tailwindConfig = fs.readFileSync(tailwindConfigPath, "utf8");
            if (tailwindConfig.includes("module.exports")) {
                tailwindConfig = tailwindConfig.replace(/module\.exports\s*=/, "export default");
                fs.writeFileSync(tailwindConfigPath, tailwindConfig);
                console.log("✅ Fixed tailwind.config.js (ES module)");
            }
        }

        const postcssConfigPath = path.join(outputPath, "postcss.config.js");
        if (fs.existsSync(postcssConfigPath)) {
            let postcssConfig = fs.readFileSync(postcssConfigPath, "utf8");
            if (postcssConfig.includes("module.exports")) {
                postcssConfig = postcssConfig.replace(/module\.exports\s*=/, "export default");
                fs.writeFileSync(postcssConfigPath, postcssConfig);
                console.log("✅ Fixed postcss.config.js (ES module)");
            }
        }

        generatePackageLock(outputPath);

        const workflowDir = path.join(outputPath, ".github/workflows");
        fs.mkdirSync(workflowDir, { recursive: true });
        const workflowPath = path.join(workflowDir, "deploy.yml");
        fs.writeFileSync(workflowPath, createGitHubActionsWorkflow());
        console.log("✅ Added GitHub Actions workflow");

        console.log("🚀 Deploying to GitHub...");
        const deployResult = await deployToGitHub(outputPath, repoName, formData.description);

        if (!deployResult.success) {
            throw new Error(deployResult.error);
        }

        console.log("✅ Deployment complete!");
        console.log("🌐 Site will be available at:", deployResult.pagesUrl);

        return {
            success: true,
            repoUrl: deployResult.repoUrl,
            pagesUrl: deployResult.pagesUrl,
            repoName: repoName
        };
    } catch (err) {
        console.error("❌ Deployment failed:", err.message);
        return { success: false, error: err.message };
    }
}

export { parseCodeBlocks };