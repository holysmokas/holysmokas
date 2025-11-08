import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { generateProjectCode } from './utils/github.js';

export async function deployProject(projectName, repoName) {
    try {
        console.log(`\n🚀 Deploying ${projectName} to GitHub...`);

        // 1️⃣ Generate project code
        await generateProjectCode(projectName, repoName);

        // 2️⃣ Replace {{projectName}} in vite.config.js with actual repo name
        const viteConfigPath = path.join(process.cwd(), 'vite.config.js');
        let originalViteConfig = null;

        if (fs.existsSync(viteConfigPath)) {
            originalViteConfig = fs.readFileSync(viteConfigPath, 'utf8');

            const updatedViteConfig = originalViteConfig.replace('{{projectName}}', repoName);
            fs.writeFileSync(viteConfigPath, updatedViteConfig);

            console.log(`✅ Injected repo name (${repoName}) into vite.config.js`);
        } else {
            console.warn('⚠️ vite.config.js not found. Skipping base path injection.');
        }

        // 3️⃣ Build and push
        console.log('\n🏗️ Building project...');
        execSync('npm run build', { stdio: 'inherit' });

        console.log('\n🧩 Running git add...');
        execSync('git add .', { stdio: 'inherit' });

        console.log('💬 Committing...');
        execSync('git commit -m "initial push"', { stdio: 'inherit' });

        console.log('📤 Pushing to GitHub...');
        execSync('git push', { stdio: 'inherit' });

        console.log('✅ Initial project pushed successfully! Waiting before GitHub Pages config...');

        // 4️⃣ Restore original vite.config.js (with {{projectName}})
        if (originalViteConfig) {
            fs.writeFileSync(viteConfigPath, originalViteConfig);
            console.log('♻️ Restored vite.config.js back to boilerplate ({{projectName}}).');
        }
    } catch (error) {
        console.error('❌ Deployment failed:', error);
    }
}
