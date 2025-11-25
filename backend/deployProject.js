/**
 * deployProject.js
 * Automatically selects boilerplate based on package type and generates AI code
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";
import { generateProjectCode, deployToGitHub } from "./utils/github.js";
import { db } from "./firebaseAdmin.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


function extractAndSaveLogoFromMemory(projectId, outputPath) {
    try {
        console.log("🖼️  Checking for logo in memory...");

        // Check global memory store
        if (!global.pendingLogos || !global.pendingLogos.has(projectId)) {
            console.log("ℹ️  No logo found in memory for this project");
            return null;
        }

        const logoData = global.pendingLogos.get(projectId);
        console.log("📸 Logo found in memory:", {
            filename: logoData.filename,
            size: `${(logoData.buffer.length / 1024).toFixed(2)} KB`,
            mimetype: logoData.mimetype
        });

        // Determine file extension
        const ext = logoData.mimetype === 'image/svg+xml' ? 'svg'
            : logoData.mimetype === 'image/png' ? 'png'
                : logoData.mimetype === 'image/jpeg' ? 'jpg'
                    : logoData.mimetype === 'image/jpg' ? 'jpg'
                        : 'png'; // default

        // Create /public folder if needed
        const publicDir = path.join(outputPath, 'public');
        if (!fs.existsSync(publicDir)) {
            fs.mkdirSync(publicDir, { recursive: true });
            console.log("📁 Created /public directory");
        }

        // Save the logo file
        const logoPath = path.join(publicDir, `logo.${ext}`);
        fs.writeFileSync(logoPath, logoData.buffer);

        console.log(`✅ Logo saved to: /public/logo.${ext}`);

        // Clean up from memory (it's now on disk)
        global.pendingLogos.delete(projectId);
        console.log("🧹 Logo removed from memory (saved to disk)");

        return `/logo.${ext}`; // Return the URL path for use in the site

    } catch (error) {
        console.error("❌ Error saving logo:", error.message);
        return null;
    }
}
function sanitizeProjectName(name) {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9-_~.]/g, "-")
        .replace(/^-+|-+$/g, "")
        .substring(0, 214);
}

/** Sanitize description for GitHub */
function sanitizeDescription(description) {
    if (!description) return "Generated site";

    return description
        .replace(/[\r\n\t]/g, ' ')  // Replace newlines, carriage returns, tabs with spaces
        .replace(/[^\x20-\x7E]/g, '') // Remove non-printable ASCII characters
        .replace(/\s+/g, ' ')  // Collapse multiple spaces into one
        .trim()
        .substring(0, 350); // GitHub has a 350 character limit for descriptions
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
 * Fix incorrect exports in AI-generated component files
 * Handles multiple export patterns and ensures proper default exports
 */
function fixExports(fileContent, filename) {
    // Only fix .jsx component files
    if (!filename.endsWith('.jsx')) {
        return fileContent;
    }

    const componentName = path.basename(filename, '.jsx');
    let fixed = false;

    // Pattern 1: export { ComponentName } -> export default ComponentName
    if (fileContent.includes(`export { ${componentName} }`)) {
        fileContent = fileContent.replace(`export { ${componentName} }`, `export default ${componentName}`);
        console.log(`  🔧 Fixed: export { ${componentName} } → export default ${componentName} in ${filename}`);
        fixed = true;
    }

    // Pattern 2: export { ComponentName }; (with semicolon)
    if (fileContent.includes(`export { ${componentName} };`)) {
        fileContent = fileContent.replace(`export { ${componentName} };`, `export default ${componentName};`);
        console.log(`  🔧 Fixed: export { ${componentName} }; → export default ${componentName}; in ${filename}`);
        fixed = true;
    }

    // Pattern 3: export const ComponentName = ... (arrow function)
    const exportConstPattern = new RegExp(`export\\s+const\\s+${componentName}\\s*=`, 'g');
    if (exportConstPattern.test(fileContent)) {
        fileContent = fileContent.replace(exportConstPattern, `const ${componentName} =`);
        if (!fileContent.includes('export default')) {
            fileContent += `\n\nexport default ${componentName};\n`;
        }
        console.log(`  🔧 Fixed: export const ${componentName} → const ${componentName} + export default in ${filename}`);
        fixed = true;
    }

    // Pattern 4: export function ComponentName ... 
    const exportFunctionPattern = new RegExp(`export\\s+function\\s+${componentName}`, 'g');
    if (exportFunctionPattern.test(fileContent)) {
        fileContent = fileContent.replace(exportFunctionPattern, `function ${componentName}`);
        if (!fileContent.includes('export default')) {
            fileContent += `\n\nexport default ${componentName};\n`;
        }
        console.log(`  🔧 Fixed: export function ${componentName} → function ${componentName} + export default in ${filename}`);
        fixed = true;
    }

    // Pattern 5: No export at all but function/const exists
    if (!fileContent.includes('export default') && !fileContent.includes('export {') && !fileContent.includes('export const') && !fileContent.includes('export function')) {
        const hasFunctionDeclaration = fileContent.match(new RegExp(`function\\s+${componentName}\\s*\\(`, 'i'));
        const hasConstDeclaration = fileContent.match(new RegExp(`const\\s+${componentName}\\s*=`, 'i'));

        if (hasFunctionDeclaration || hasConstDeclaration) {
            fileContent += `\n\nexport default ${componentName};\n`;
            console.log(`  🔧 Added missing export default ${componentName} to ${filename}`);
            fixed = true;
        }
    }

    if (!fixed && !fileContent.includes('export default')) {
        console.log(`  ⚠️  WARNING: No export found in ${filename} - Component may not work!`);
        console.log(`  📝 Component name expected: ${componentName}`);
    }

    return fileContent;
}

function finalExportCheck(projectDir) {
    console.log("🔍 Final export safety check...");

    function scanDirectory(dir) {
        const entries = fs.readdirSync(dir, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);

            if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '.git') {
                scanDirectory(fullPath);
            } else if (entry.name.endsWith('.jsx')) {
                let content = fs.readFileSync(fullPath, 'utf8');
                const componentName = path.basename(entry.name, '.jsx');

                // Skip main.jsx (doesn't need default export)
                if (componentName === 'main') continue;

                // Check if it has export default
                if (!content.includes('export default')) {
                    console.log(`  ⚠️  MISSING EXPORT in ${entry.name} - ADDING NOW`);

                    // Add export default at the end
                    content = content.trim();
                    if (!content.endsWith(';')) {
                        content += '\n';
                    }
                    content += `\nexport default ${componentName};\n`;

                    fs.writeFileSync(fullPath, content, 'utf8');
                    console.log(`  ✅ Added: export default ${componentName} to ${entry.name}`);
                }
            }
        }
    }

    scanDirectory(projectDir);
    console.log("✅ Final export check complete");
}


/**
 * Remove invalid Tailwind CSS classes that cause build failures
 */
function cleanInvalidTailwindClasses(fileContent, filename) {
    // Only process CSS, JSX, JS, and HTML files
    if (!filename.match(/\.(css|jsx|js|html)$/)) {
        return fileContent;
    }

    // List of invalid/problematic Tailwind classes
    const invalidClasses = [
        'resize-vertical',
        'resize-horizontal',
        'resize-none',
        'resize-both',
        'resize',
    ];

    let cleaned = fileContent;
    let fixedCount = 0;

    for (const invalidClass of invalidClasses) {
        // Match className="...resize-vertical..." patterns
        const pattern = new RegExp(`(className|class)="([^"]*?\\s)?${invalidClass}(\\s[^"]*?)?"`, 'g');

        cleaned = cleaned.replace(pattern, (match, attr, before = '', after = '') => {
            fixedCount++;
            const cleanedClasses = `${before}${after}`.trim();
            return cleanedClasses ? `${attr}="${cleanedClasses}"` : `${attr}=""`;
        });
    }

    if (fixedCount > 0) {
        console.log(`  🧹 Cleaned ${fixedCount} invalid Tailwind classes from ${filename}`);
    }

    return cleaned;
}

/**
 * Replace placeholders in legal pages with actual business information
 */
function processLegalPages(outputPath, businessName) {
    console.log("⚖️  Processing legal pages...");

    const legalPages = [
        'terms-of-service.html',
        'privacy-policy.html',
        'cookies.html',
        'disclaimer.html'
    ];

    // Legal pages should be in /public folder for Vite projects
    // Vite will automatically copy them to /dist during build
    const publicDir = path.join(outputPath, 'public');

    // Create public directory if it doesn't exist
    if (!fs.existsSync(publicDir)) {
        console.log("📁 Creating /public directory for legal pages...");
        fs.mkdirSync(publicDir, { recursive: true });
    }

    let processedCount = 0;

    for (const page of legalPages) {
        const pagePath = path.join(publicDir, page);

        if (fs.existsSync(pagePath)) {
            let content = fs.readFileSync(pagePath, 'utf8');

            // Replace placeholders
            content = content.replace(/\{\{businessName\}\}/g, businessName);

            // Fix navigation paths: change ../index.html to / (since files will be in dist root)
            content = content.replace(/href="\.\.\/index\.html"/g, 'href="../"');
            content = content.replace(/href="index\.html"/g, 'href="./"');
            content = content.replace(/href="\/"/g, 'href="./"');

            fs.writeFileSync(pagePath, content, 'utf8');
            processedCount++;
            console.log(`  ✅ Processed: ${page}`);
        } else {
            console.log(`  ⚠️  Missing: ${page} (AI should have generated this)`);
        }
    }

    if (processedCount === legalPages.length) {
        console.log(`✅ All ${processedCount} legal pages processed successfully`);
    } else {
        console.log(`⚠️  Only ${processedCount}/${legalPages.length} legal pages found`);
    }

    return processedCount;
}

/**
 * Fix exports in all JSX files in a directory recursively
 */
function fixBoilerplateExports(dirPath) {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    let fixedCount = 0;

    for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);

        if (entry.isDirectory()) {
            if (entry.name !== 'node_modules' && entry.name !== '.git') {
                fixedCount += fixBoilerplateExports(fullPath);
            }
        } else if (entry.name.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            const originalContent = content;

            content = fixExports(content, entry.name);
            content = cleanInvalidTailwindClasses(content, entry.name);

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                fixedCount++;
            }
        }
    }

    return fixedCount;
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

            // Fix exports in boilerplate files
            console.log("🔧 Fixing exports in boilerplate files...");
            const fixedCount = fixBoilerplateExports(outputPath);
            if (fixedCount > 0) {
                console.log(`✅ Fixed exports in ${fixedCount} boilerplate files`);
            }

        } else {
            console.log("🎨 AI Generation: Creating minimal structure for full AI generation");
            fs.mkdirSync(path.join(outputPath, "src"), { recursive: true });
            console.log("✅ Minimal structure created - AI will generate all files");
        }

        // ✅ Extract logo from memory if available (AFTER boilerplate is copied)
        let logoPath = null;
        if (formData.projectId) {
            logoPath = extractAndSaveLogoFromMemory(formData.projectId, outputPath);
        }

        // ✅ Pass logoPath to AI generation so it knows where the logo is
        if (logoPath) {
            console.log(`🖼️  Logo will be available at: ${logoPath}`);
            formData.logoPath = logoPath;
        }

        console.log("🤖 Generating AI code...");
        const generatedCode = await generateProjectCode({
            name: formData.name,
            description: formData.description,
            mustHaveFeatures: formData.mustHaveFeatures,
            category: boilerplateConfig.category,
            packageType: formData.category,
            useBoilerplate: boilerplateConfig.useBoilerplate,
            boilerplateDescription: boilerplateConfig.description,
            logoPath: logoPath  // ✅ Pass logo path to AI so it can reference it
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

                // Fix exports in component files
                let content = fixExports(file.content, file.path);

                // Clean invalid Tailwind classes
                content = cleanInvalidTailwindClasses(content, file.path);

                if (file.path === 'vite.config.js') {
                    if (!content.includes('base:')) {
                        content = content.replace(
                            /(plugins:\s*\[.*?\])/s,
                            `$1,\n  base: '/${repoName}/'`
                        );
                    } else {
                        content = content.replace(/base:\s*['"].*?['"]/, `base: '/${repoName}/'`);
                    }
                    fs.writeFileSync(fullPath, content, "utf8");
                    console.log(`  ✅ Wrote: ${file.path} (with base path)`);
                } else {
                    fs.writeFileSync(fullPath, content, "utf8");
                    console.log(`  ✅ Wrote: ${file.path}`);
                }
            }
        } else {
            console.log("⚠️ No AI files parsed, using boilerplate as-is");
        }



        // Process legal pages - replace {{businessName}} placeholder
        processLegalPages(outputPath, formData.name);

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
        finalExportCheck(outputPath);
        console.log("🚀 Deploying to GitHub...");
        const sanitizedDescription = sanitizeDescription(formData.description);
        const deployResult = await deployToGitHub(outputPath, repoName, sanitizedDescription);

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