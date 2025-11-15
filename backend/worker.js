import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { Octokit } from "@octokit/rest";
import { fileURLToPath } from "url";

// Load environment variables
dotenv.config({ path: "backend/.env" });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const octokit = new Octokit({
    auth: process.env.GIT_TOKEN,
});

// ✅ Template configuration
const templateName = "smallShop";
const templatePath = path.resolve(`backend/generators/${templateName}`);

// ✅ Utility: upload files to GitHub repo
async function uploadFiles(owner, repo, dirPath) {
    const files = fs.readdirSync(dirPath);

    for (const file of files) {
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            await uploadFiles(owner, repo, filePath);
            continue;
        }

        const content = fs.readFileSync(filePath, "utf-8");
        const base64Content = Buffer.from(content).toString("base64");
        const githubPath = path.relative(templatePath, filePath).replace(/\\/g, "/");

        try {
            const { data } = await octokit.repos.createOrUpdateFileContents({
                owner,
                repo,
                path: githubPath,
                message: `Uploaded ${githubPath}`,
                content: base64Content,
            });

            console.log(`📤 Uploaded: ${githubPath}`);
        } catch (error) {
            console.error(`❌ Failed to upload ${githubPath}:`, error.message);
        }
    }
}

// ✅ Deploy client project to GitHub
async function deployClientProject(projectData) {
    try {
        console.log(`⚙️ Using template: ${templateName}`);

        // ✅ Create a new repository
        const repoName = `${projectData.businessName
            .toLowerCase()
            .replace(/\s+/g, "-")}-${Date.now()}`;
        const { data: repo } = await octokit.repos.createForAuthenticatedUser({
            name: repoName,
            description: `Generated for ${projectData.businessName}`,
            private: false,
        });

        console.log(`✅ Repository created: ${repo.html_url}`);

        // ✅ Upload template files
        console.log("📂 Uploading files...");
        await uploadFiles("holysmokas", repoName, templatePath);

        // ✅ Enable GitHub Pages
        try {
            await octokit.repos.createPagesSite({
                owner: "holysmokas",
                repo: repoName,
                source: {
                    branch: "main",
                    path: "/",
                },
            });
            console.log("🚀 GitHub Pages site created successfully.");
        } catch (error) {
            if (error.status === 409) {
                console.log("ℹ️ Pages site already exists — continuing...");
            } else {
                console.error("⚠️ Failed to enable GitHub Pages:", error.message);
            }
        }


        const liveUrl = `https://holysmokas.github.io/${repoName}/`;
        console.log("🌐 GitHub Pages URL:", liveUrl);

        // ✅ Log deployment to Google Sheets (Deployed Projects)
        try {
            const logPayload = {
                businessName: projectData.businessName,
                email: projectData.email,
                packageType: projectData.packageType || "Small Shop",
                repoUrl: repo.html_url,
                liveUrl: liveUrl,
            };

            // 🔗 Replace this with your actual Apps Script Web App URL
            const scriptUrl =
                "https://script.google.com/macros/s/AKfycbxrK0RHpRW9GW_4Y3vaoPq212aLWzyJTROgQ5QRe4GKsQuHp6iD_Xak86KJNqLmCsv7Dw/exec";

            const response = await fetch(scriptUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(logPayload),
            });

            const result = await response.json();
            console.log("📊 Google Sheets log response:", result);
        } catch (error) {
            console.error("⚠️ Failed to log deployment to Google Sheets:", error);
        }

        // ✅ Save local record
        fs.writeFileSync(
            path.resolve("backend/deployments.json"),
            JSON.stringify({ ...projectData, liveUrl }, null, 2)
        );

        console.log("✅ Deployment complete for", projectData.businessName);
        console.log("🌐 Live URL:", liveUrl);
    } catch (error) {
        console.error("❌ Deployment failed:", error);
    }
}

// ✅ Example project data
const projectData = {
    businessName: "Rossi Mission SF",
    email: "rossi@example.com",
    packageType: "Small Shop",
};

// Run deployment
deployClientProject(projectData);
