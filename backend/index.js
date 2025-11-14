import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";
import { deployClientProject } from "./worker.js";

dotenv.config({ path: path.resolve("backend/.env") });

const app = express();
app.use(bodyParser.json());

// 🪄 This is the webhook endpoint your Google Sheet or Apps Script will POST to
app.post("/api/generate-site", async (req, res) => {
    try {
        const formData = req.body;
        console.log("📝 Received form data:", formData);

        const result = await deployClientProject(formData);

        console.log("✅ Deployed:", result);
        res.status(200).json({ success: true, ...result });
    } catch (err) {
        console.error("❌ Error:", err);
        res.status(500).json({ success: false, error: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
