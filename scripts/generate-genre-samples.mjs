import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import Groq from "groq-sdk";
import dotenv from "dotenv";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, "..", ".env.local") });

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || "",
});

const GENRE_SAMPLES = {
  technical: "Microservices architecture leverages containerization through orchestration platforms like Kubernetes, enabling horizontal scaling and fault tolerance. By implementing API gateways with load balancers, distributed systems achieve high availability while maintaining latency thresholds below 100 milliseconds. The integration of service meshes facilitates secure inter-service communication through mutual TLS authentication and circuit breaker patterns.",

  medical: "In patients with multifactorial cardiometabolic dysregulation, subclinical hypercoagulability may precipitate microvascular ischemic sequelae, particularly within the juxtaglomerular apparatus and peri-insular microcirculation, exacerbating autonomic dysrhythmias and paroxysmal vasospastic phenomena. Concomitant dyslipoproteinemia and endothelial dysfunction synergistically augment pro-inflammatory cytokine cascades.",

  fiction: "The café stood at the corner of two forgotten streets, its windows fogged with the breath of strangers seeking warmth. Sarah traced patterns in the condensation, watching the rain blur the streetlights into golden halos. She had been waiting for three hours, but hope refused to abandon her. The door chimed, and her heart leaped—only to sink again as an elderly man shuffled past, shaking droplets from his umbrella.",

  biography: "Marie Curie was born in Warsaw, Poland, in 1867 during a time when women were rarely afforded educational opportunities. Despite facing tremendous obstacles, she became the first woman to win a Nobel Prize and remains the only person to have won Nobel Prizes in two different scientific fields. Her groundbreaking research on radioactivity not only revolutionized physics and chemistry but also paved the way for future generations of women in science.",

  classics: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.",

  fantasy: "The dragon's scales shimmered like molten copper in the dying light, each one inscribed with runes older than the mountains themselves. Aria gripped her staff tighter, feeling the ancient magic pulse through the wood. She had trained her entire life for this moment—the final binding ritual that would either save her kingdom or doom it to eternal shadow. The beast's eyes met hers, and in that gaze, she saw not hatred, but understanding.",
};

const VOICES = [
  "Adelaide-PlayAI",
  "Angelo-PlayAI",
  "Basil-PlayAI",
  "Celeste-PlayAI",
  "Mitch-PlayAI",
  "Ruby-PlayAI",
  "Cillian-PlayAI",
];

async function generateGenreSample(genre, text, voice) {
  try {
    console.log(`Generating ${genre} sample with ${voice}...`);

    const wav = await groq.audio.speech.create({
      model: "playai-tts",
      voice: voice,
      response_format: "wav",
      input: text,
    });

    const buffer = Buffer.from(await wav.arrayBuffer());
    const outputDir = path.join(__dirname, "..", "public", "voices", "genres");

    // Create directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const filename = `${genre}-${voice}.wav`;
    const outputPath = path.join(outputDir, filename);

    await fs.promises.writeFile(outputPath, buffer);
    console.log(`✓ Generated ${filename} (${(buffer.length / 1024).toFixed(1)}KB)`);

    return true;
  } catch (error) {
    console.error(`✗ Error generating ${genre} with ${voice}:`, error.message);
    return false;
  }
}

async function main() {
  console.log("Starting genre sample generation...\n");
  console.log(`Genres: ${Object.keys(GENRE_SAMPLES).length}`);
  console.log(`Voices: ${VOICES.length}`);
  console.log(`Total files to generate: ${Object.keys(GENRE_SAMPLES).length * VOICES.length}\n`);

  let successCount = 0;
  let errorCount = 0;

  for (const [genre, text] of Object.entries(GENRE_SAMPLES)) {
    console.log(`\n--- Processing ${genre.toUpperCase()} genre ---`);

    for (const voice of VOICES) {
      const success = await generateGenreSample(genre, text, voice);
      if (success) {
        successCount++;
      } else {
        errorCount++;
      }

      // Add a small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }

  console.log("\n" + "=".repeat(50));
  console.log(`Generation complete!`);
  console.log(`Success: ${successCount} files`);
  console.log(`Errors: ${errorCount} files`);
  console.log("=".repeat(50));
}

main().catch(console.error);
