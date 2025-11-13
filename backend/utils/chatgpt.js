import fetch from "node-fetch";

export async function generateProjectCode(promptData) {
    const { name, description, category } = promptData;

    const prompt = `
You are an expert React developer. Generate the full source code for a modern small online shop called "${name}".
Description: ${description}
Category: ${category}
Use Vite + React + TailwindCSS and include:
- App.jsx
- Shop.jsx with AI-generated example products
- Header.jsx, Footer.jsx, and ProductCard.jsx
- index.html, vite.config.js, and package.json
Make sure code is properly formatted and working as a complete project.
`;

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                    { role: "system", content: "You generate complete working React apps using Vite + Tailwind." },
                    { role: "user", content: prompt },
                ],
            }),
        });

        const data = await response.json();

        if (!data.choices?.length) {
            console.error("❌ No response from OpenAI API:", data);
            return null;
        }

        const generatedCode = data.choices[0].message.content;
        console.log("✅ OpenAI generated project code successfully.");
        return generatedCode;
    } catch (error) {
        console.error("❌ Error generating project code:", error);
        return null;
    }
}
