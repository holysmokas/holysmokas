import fs from 'fs';
import path from 'path';

// ✅ Generate project code including correct index.html
export async function generateProjectCode(projectName, repoName) {
    try {
        const projectDir = path.join(process.cwd(), projectName);
        if (!fs.existsSync(projectDir)) {
            fs.mkdirSync(projectDir, { recursive: true });
        }

        console.log(`\n🧱 Generating code for ${projectName}...`);

        // 🔧 Generate correct index.html
        const indexHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${projectName}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`;

        fs.writeFileSync(path.join(projectDir, 'index.html'), indexHtml);
        console.log('✅ Correct index.html generated (no CSS link tag).');
    } catch (error) {
        console.error('❌ Error generating project code:', error);
    }
}
