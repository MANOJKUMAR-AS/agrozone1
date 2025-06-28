// src/pages/api/agrochat.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { query } = req.body;
  if (!query) return res.status(400).json({ error: "Query is required" });

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Note: Must be an array input in v1
    const result = await model.generateContent([query]);
    const response = await result.response;
    const text = response.text();

    res.status(200).json({ reply: text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: "Failed to fetch Gemini response" });
  }
}
