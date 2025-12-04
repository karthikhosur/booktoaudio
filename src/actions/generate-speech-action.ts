"use server";

import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || "",
});

export type VoiceName =
  | "Adelaide-PlayAI"
  | "Angelo-PlayAI"
  | "Basil-PlayAI"
  | "Celeste-PlayAI"
  | "Mitch-PlayAI"
  | "Ruby-PlayAI"
  | "Cillian-PlayAI";

export async function generateSpeech(text: string, voice: VoiceName) {
  try {
    if (!text || text.trim().length === 0) {
      throw new Error("Text is required");
    }

    const wordCount = text.trim().split(/\s+/).length;
    if (wordCount > 200) {
      throw new Error("Text must be 200 words or less");
    }

    const wav = await groq.audio.speech.create({
      model: "playai-tts",
      voice: voice,
      response_format: "wav",
      input: text,
    });

    const buffer = Buffer.from(await wav.arrayBuffer());
    const base64Audio = buffer.toString("base64");

    return {
      success: true,
      audio: base64Audio,
      voice: voice,
    };
  } catch (error) {
    console.error("Error generating speech:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to generate speech",
    };
  }
}
