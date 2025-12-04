"use client";

import { useEffect, useState } from "react";

import { Volume2 } from "lucide-react";

import type { VoiceName } from "@/actions/generate-speech-action";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SAMPLE_TEXT = `In the quiet village of Millbrook, nestled between rolling hills and ancient forests, lived a young apprentice named Elena. Each morning, she would wake before dawn to practice her craft in the old stone workshop. The rhythmic sound of her tools echoed through the misty valleys, a melody that had become as familiar to the villagers as the singing of birds. Today marked the beginning of her greatest challenge yet—to create something that would preserve her master's legacy for generations to come.`;

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
  const [audioUrl, setAudioUrl] = useState<string>(`/voices/Celeste-PlayAI.wav`);

  useEffect(() => {
    // Update audio URL when voice changes
    setAudioUrl(`/voices/${selectedVoice}.wav`);
  }, [selectedVoice]);

  return (
    <div className="bg-card border rounded-2xl p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-primary/10 p-2">
            <Volume2 className="size-5 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Preview Our AI Voices</h3>
        </div>
        <p className="text-muted-foreground text-sm">
          Listen to sample narration with different AI voices. Select a voice to hear a preview.
        </p>
      </div>

      {/* Voice Selector */}
      <div className="space-y-2">
        <Label htmlFor="voice-select">Select Voice to Preview</Label>
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
        <Label>Sample Text</Label>
        <div className="bg-muted/30 rounded-lg p-4 text-sm leading-relaxed">
          {SAMPLE_TEXT}
        </div>
      </div>

      {/* Audio Player */}
      <div className="bg-muted/50 space-y-3 rounded-xl p-4">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-primary/10 p-1.5">
            <Volume2 className="size-3 text-primary" />
          </div>
          <span className="text-sm font-medium">
            {VOICES.find((v) => v.value === selectedVoice)?.label} Voice Preview
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
