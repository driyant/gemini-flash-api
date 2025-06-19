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
const model = genAI.getGenerativeModel({ model: "models/gemini-1.5-flash" });

const upload = multer({ dest: "uploads/" });

app.get("/", (req, res) => {
  res.status(200).json({ message: "Gemini AI App is running" });
});

app.listen(port, () => {
  console.log(`Gemini AI App is running on port: ${port}`);
});
