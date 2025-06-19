const express = require("express");
const dotenv = require("dotenv");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const port = 3000;

dotenv.config();
const app = express();
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "models/gemini-2.5-flash" });

const upload = multer({
  dest: "uploads/",
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only jpg, png, and webp images are allowed"), false);
    }
  },
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Gemini AI App is running" });
});

app.post("/generate-text", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }
    const result = await model.generateContent(prompt);
    const resp = result.response;
    res.status(200).json({ output: resp.text() });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

app.post("/generate-image", upload.single("image"), async (req, res) => {
  const prompt = req.body.prompt || "Describe the image";
  const image = imageToGenerativePart(req.file.path, req.file.mimetype);
  try {
    const result = await model.generateContent([prompt, image]);
    const resp = result.response;
    res.status(200).json({ output: resp.text() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  } finally {
    fs.unlinkSync(req.file.path);
  }
});

const imageToGenerativePart = (filePath, mimeType) => {
  return {
    inlineData: {
      mimeType: mimeType,
      data: fs.readFileSync(filePath).toString("base64"),
    },
  };
};

app.listen(port, () => {
  console.log(`Gemini AI App is running on port: ${port}`);
});
