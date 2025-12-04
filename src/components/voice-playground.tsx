"use client";

import { useEffect, useState } from "react";

import { Volume2 } from "lucide-react";

import type { VoiceName } from "@/actions/generate-speech-action";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type GenreType = "technical" | "medical" | "fiction" | "biography" | "classics" | "fantasy";

const GENRE_SAMPLES: Record<GenreType, { title: string; text: string }> = {
  technical: {
    title: "Technical",
    text: "Microservices architecture leverages containerization through orchestration platforms like Kubernetes, enabling horizontal scaling and fault tolerance. By implementing API gateways with load balancers, distributed systems achieve high availability while maintaining latency thresholds below 100 milliseconds. The integration of service meshes facilitates secure inter-service communication through mutual TLS authentication and circuit breaker patterns.",
  },
  medical: {
    title: "Medical",
    text: "In patients with multifactorial cardiometabolic dysregulation, subclinical hypercoagulability may precipitate microvascular ischemic sequelae, particularly within the juxtaglomerular apparatus and peri-insular microcirculation, exacerbating autonomic dysrhythmias and paroxysmal vasospastic phenomena. Concomitant dyslipoproteinemia and endothelial dysfunction synergistically augment pro-inflammatory cytokine cascades.",
  },
  fiction: {
    title: "Fiction",
    text: "The café stood at the corner of two forgotten streets, its windows fogged with the breath of strangers seeking warmth. Sarah traced patterns in the condensation, watching the rain blur the streetlights into golden halos. She had been waiting for three hours, but hope refused to abandon her. The door chimed, and her heart leaped—only to sink again as an elderly man shuffled past, shaking droplets from his umbrella.",
  },
  biography: {
    title: "Biography",
    text: "Marie Curie was born in Warsaw, Poland, in 1867 during a time when women were rarely afforded educational opportunities. Despite facing tremendous obstacles, she became the first woman to win a Nobel Prize and remains the only person to have won Nobel Prizes in two different scientific fields. Her groundbreaking research on radioactivity not only revolutionized physics and chemistry but also paved the way for future generations of women in science.",
  },
  classics: {
    title: "Classics",
    text: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.",
  },
  fantasy: {
    title: "Fantasy",
    text: "The dragon's scales shimmered like molten copper in the dying light, each one inscribed with runes older than the mountains themselves. Aria gripped her staff tighter, feeling the ancient magic pulse through the wood. She had trained her entire life for this moment—the final binding ritual that would either save her kingdom or doom it to eternal shadow. The beast's eyes met hers, and in that gaze, she saw not hatred, but understanding.",
  },
};

const VOICES: { value: VoiceName; label: string; gender: string; accent: string }[] = [
  { value: "Adelaide-PlayAI", label: "Adelaide", gender: "Female", accent: "Australian" },
  { value: "Angelo-PlayAI", label: "Angelo", gender: "Male", accent: "Italian" },
  { value: "Basil-PlayAI", label: "Basil", gender: "Male", accent: "British" },
  { value: "Celeste-PlayAI", label: "Celeste", gender: "Female", accent: "American" },
  { value: "Mitch-PlayAI", label: "Mitch", gender: "Male", accent: "American" },
  { value: "Ruby-PlayAI", label: "Ruby", gender: "Female", accent: "British" },
  { value: "Cillian-PlayAI", label: "Cillian", gender: "Male", accent: "Irish" },
];

export function VoicePlayground() {
  const [selectedVoice, setSelectedVoice] = useState<VoiceName>("Celeste-PlayAI");
  const [selectedGenre, setSelectedGenre] = useState<GenreType>("fiction");
  const [audioUrl, setAudioUrl] = useState<string>(`/voices/genres/${selectedGenre}-${selectedVoice}.wav`);

  useEffect(() => {
    // Update audio URL when voice or genre changes
    setAudioUrl(`/voices/genres/${selectedGenre}-${selectedVoice}.wav`);
  }, [selectedVoice, selectedGenre]);

  const currentSample = GENRE_SAMPLES[selectedGenre];

  return (
    <div className="bg-card border rounded-2xl p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-primary/10 p-2">
            <Volume2 className="size-5 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Preview Our AI Voices Across Genres</h3>
        </div>
        <p className="text-muted-foreground text-sm">
          Select a genre and voice to hear how our AI handles different writing styles and technical terminology.
        </p>
      </div>

      {/* Genre Selector */}
      <div className="space-y-3">
        <Label>Select Genre</Label>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(GENRE_SAMPLES) as GenreType[]).map((genre) => (
            <Button
              key={genre}
              variant={selectedGenre === genre ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedGenre(genre)}
              className="capitalize"
            >
              {GENRE_SAMPLES[genre].title}
            </Button>
          ))}
        </div>
      </div>

      {/* Voice Selector */}
      <div className="space-y-2">
        <Label htmlFor="voice-select">Select Voice</Label>
        <Select value={selectedVoice} onValueChange={(value) => setSelectedVoice(value as VoiceName)}>
          <SelectTrigger id="voice-select" className="w-full">
            <SelectValue placeholder="Choose a voice" />
          </SelectTrigger>
          <SelectContent>
            {VOICES.map((voice) => (
              <SelectItem key={voice.value} value={voice.value}>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{voice.label}</span>
                  <span className="text-muted-foreground text-xs">
                    ({voice.gender}, {voice.accent})
                  </span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Sample Text Display */}
      <div className="space-y-2">
        <Label>Sample Text - {currentSample.title}</Label>
        <div className="bg-muted/30 rounded-lg p-4 text-sm leading-relaxed">
          {currentSample.text}
        </div>
      </div>

      {/* Audio Player */}
      <div className="bg-muted/50 space-y-3 rounded-xl p-4">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-primary/10 p-1.5">
            <Volume2 className="size-3 text-primary" />
          </div>
          <span className="text-sm font-medium">
            {VOICES.find((v) => v.value === selectedVoice)?.label} Voice - {currentSample.title} Genre
          </span>
        </div>
        <audio
          key={audioUrl}
          controls
          className="w-full"
          src={audioUrl}
        >
          Your browser does not support the audio element.
        </audio>
        <p className="text-muted-foreground text-xs">
          {VOICES.find((v) => v.value === selectedVoice)?.gender} • {VOICES.find((v) => v.value === selectedVoice)?.accent} Accent
        </p>
      </div>
    </div>
  );
}
