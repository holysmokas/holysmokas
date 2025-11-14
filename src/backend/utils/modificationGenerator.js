// backend/utils/modificationGenerator.js (NEW FILE)
import Anthropic from "@anthropic-ai/sdk";
import dotenv from "dotenv";

dotenv.config({ path: "backend/.env" });

export async function generateModification(config) {
    const { currentFiles, modificationRequest, projectName, category } = config;

    console.log(`🔄 Generating modifications for: ${projectName}`);

    if (!process.env.OPENAI_API_KEY) {
        throw new Error("Missing OPENAI_API_KEY");
    }

    try {
        const anthropic = new Anthropic({ apiKey: process.env.OPENAI_API_KEY });

        const currentFilesText = Object.entries(currentFiles)
            .map(([path, content]) => `File: ${path}\n\`\`\`\n${content}\n\`\`\``)
            .join('\n\n');

        const prompt = `You are modifying an existing React + Vite project.

Project: ${projectName}
Category: ${category}

CURRENT CODE:
${currentFilesText}

MODIFICATION REQUEST:
${modificationRequest}

CRITICAL INSTRUCTIONS:
1. Output ONLY the files that need to be changed
2. Format: \`\`\`language:filepath
3. Maintain all existing export formats
4. Keep all existing functionality unless specifically asked to change
5. ALL imports MUST include .jsx extension
6. Components use: function ComponentName() {} then export default ComponentName;
7. Context files use: export const Provider, export const useHook

Generate the modified files now:`;

        const response = await anthropic.messages.create({
            model: "claude-sonnet-4-20250514",
            max_tokens: 16000,
            messages: [{ role: "user", content: prompt }],
            system: "You are an expert React developer. Only output the changed files. Maintain exact export formats from the original code.",
            temperature: 0.3,
        });

        const generatedCode = response.content[0]?.text?.trim();
        if (!generatedCode) throw new Error("Empty AI response");

        console.log("✅ Modifications generated successfully");
        return generatedCode;

    } catch (err) {
        console.error("❌ Error generating modifications:", err.message);
        throw err;
    }
}