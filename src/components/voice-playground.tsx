"use client";

import { useState } from "react";

import { Loader2, Play, Volume2 } from "lucide-react";

import { generateSpeech, type VoiceName } from "@/actions/generate-speech-action";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

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
  const [text, setText] = useState(SAMPLE_TEXT);
  const [selectedVoice, setSelectedVoice] = useState<VoiceName>("Celeste-PlayAI");
  const [isGenerating, setIsGenerating] = useState(false);
  const [audioData, setAudioData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [wordCount, setWordCount] = useState(SAMPLE_TEXT.trim().split(/\s+/).length);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
    const words = newText.trim().split(/\s+/).filter(Boolean).length;
    setWordCount(words);
    setError(null);
  };

  const handleGenerate = async () => {
    if (wordCount > 200) {
      setError("Text must be 200 words or less");
      return;
    }

    setIsGenerating(true);
    setError(null);
    setAudioData(null);

    // Check if using default sample text - if so, use pre-generated file
    if (text.trim() === SAMPLE_TEXT.trim()) {
      try {
        const response = await fetch(`/voices/${selectedVoice}.wav`);
        if (response.ok) {
          const blob = await response.blob();
          const arrayBuffer = await blob.arrayBuffer();
          const base64Audio = btoa(
            new Uint8Array(arrayBuffer).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );
          setAudioData(base64Audio);
          setIsGenerating(false);
          return;
        }
      } catch (err) {
        // Fall through to API call if pre-generated file fails
        console.log("Pre-generated file not found, using API");
      }
    }

    // Use API for custom text or if pre-generated file not available
    const result = await generateSpeech(text, selectedVoice);

    if (result.success && result.audio) {
      setAudioData(result.audio);
    } else {
      setError(result.error || "Failed to generate speech");
    }

    setIsGenerating(false);
  };

  return (
    <div className="bg-card border rounded-2xl p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-primary/10 p-2">
            <Volume2 className="size-5 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Try Our AI Voices</h3>
        </div>
        <p className="text-muted-foreground text-sm">
          Test different voices with your own text or use our sample. Up to 200 words.
        </p>
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

      {/* Text Input */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="text-input">Your Text</Label>
          <span
            className={cn(
              "text-xs",
              wordCount > 200 ? "text-destructive font-medium" : "text-muted-foreground"
            )}
          >
            {wordCount} / 200 words
          </span>
        </div>
        <Textarea
          id="text-input"
          value={text}
          onChange={handleTextChange}
          placeholder="Enter your text here..."
          className="min-h-[150px] resize-none"
          maxLength={2000}
        />
      </div>

      {/* Generate Button */}
      <Button
        onClick={handleGenerate}
        disabled={isGenerating || wordCount === 0 || wordCount > 200}
        className="w-full"
        size="lg"
      >
        {isGenerating ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Play className="mr-2 size-4" />
            Generate Audio
          </>
        )}
      </Button>

      {/* Error Display */}
      {error && (
        <div className="bg-destructive/10 text-destructive rounded-lg p-4 text-sm">
          {error}
        </div>
      )}

      {/* Audio Player */}
      {audioData && (
        <div className="bg-muted/50 space-y-3 rounded-xl p-4">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-green-500/10 p-1.5">
              <Play className="size-3 text-green-600 dark:text-green-400" />
            </div>
            <span className="text-sm font-medium">Generated Audio</span>
          </div>
          <audio
            controls
            className="w-full"
            src={`data:audio/wav;base64,${audioData}`}
          >
            Your browser does not support the audio element.
          </audio>
          <p className="text-muted-foreground text-xs">
            Voice: {VOICES.find((v) => v.value === selectedVoice)?.label}
          </p>
        </div>
      )}
    </div>
  );
}
