import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";
import { SYSTEM_INSTRUCTION } from "../constants";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.warn("GEMINI_API_KEY is not set. AI Agent will not function.");
}

const ai = new GoogleGenAI({ apiKey: apiKey || "" });

export async function chatWithAgent(messages: Message[]) {
  if (!apiKey) {
    return "抱歉，目前 AI 經紀人尚未配置完成（缺少 API Key）。請稍後再試！";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: messages.map(m => ({
        role: m.role,
        parts: [{ text: m.content }]
      })),
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "我現在有點忙，請稍後再問我一次。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "抱歉，我現在連線有些問題，請稍後再試。";
  }
}
