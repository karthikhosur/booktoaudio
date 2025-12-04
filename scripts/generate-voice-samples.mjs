import fs from "fs";
import path from "path";
import Groq from "groq-sdk";
import { fileURLToPath } from "url";
import { dirname } from "path";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from .env.local
dotenv.config({ path: path.join(__dirname, "..", ".env.local") });

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const SAMPLE_TEXT = `In the quiet village of Millbrook, nestled between rolling hills and ancient forests, lived a young apprentice named Elena. Each morning, she would wake before dawn to practice her craft in the old stone workshop. The rhythmic sound of her tools echoed through the misty valleys, a melody that had become as familiar to the villagers as the singing of birds. Today marked the beginning of her greatest challenge yet—to create something that would preserve her master's legacy for generations to come.`;

const VOICES = [
  "Adelaide-PlayAI",
  "Angelo-PlayAI",
  "Basil-PlayAI",
  "Celeste-PlayAI",
  "Mitch-PlayAI",
  "Ruby-PlayAI",
  "Cillian-PlayAI",
];

async function generateVoiceSample(voice) {
  try {
    console.log(`Generating sample for ${voice}...`);

    const wav = await groq.audio.speech.create({
      model: "playai-tts",
      voice: voice,
      response_format: "wav",
      input: SAMPLE_TEXT,
    });

    const buffer = Buffer.from(await wav.arrayBuffer());
    const outputPath = path.join(__dirname, "..", "public", "voices", `${voice}.wav`);

    await fs.promises.writeFile(outputPath, buffer);
    console.log(`✓ Generated ${voice}.wav`);
  } catch (error) {
    console.error(`✗ Failed to generate ${voice}:`, error.message);
  }
}

async function generateAllSamples() {
  console.log("Starting voice sample generation...\n");

  for (const voice of VOICES) {
    await generateVoiceSample(voice);
    // Small delay to avoid rate limiting
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  console.log("\n✓ All voice samples generated!");
}

generateAllSamples();
