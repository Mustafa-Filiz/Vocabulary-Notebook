import { SYSTEM_PROMPT } from "@/constants/system-promt";
import type { Level } from "@/generated/prisma/client";

import { WordCandidate } from "@/types";
import { GoogleGenAI } from "@google/genai";

const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

function buildWordGenerationPrompt(level: Level, count: number = 10): string {
  const levelDescriptions: Record<Level, string> = {
    A1: "absolute beginner — basic everyday words like greetings, numbers, colors, family members, simple objects",
    A2: "elementary — common daily life vocabulary, shopping, food, directions, simple verbs and adjectives",
    B1: "intermediate — broader topics like work, travel, health, opinions, more complex verbs and compound nouns",
    B2: "upper-intermediate — abstract concepts, current events, professional contexts, idiomatic expressions",
    C1: "advanced — nuanced vocabulary, formal registers, specialized topics, phrasal constructions",
    C2: "mastery — rare, literary, highly specialized, or idiomatic words that native speakers use in educated discourse",
  };

  return `Generate exactly ${count} German vocabulary words for CEFR level ${level} (${levelDescriptions[level]}).

            Requirements:
            - All words must be genuinely representative of ${level} level
            - Include a mix of word types: prioritize nouns (60%), then verbs (25%), then adjectives/adverbs (15%)
            - Example sentences must match ${level} complexity (short and simple for A1, more complex for C1/C2)
            - For A1/A2: focus on high-frequency, concrete vocabulary
            - For B1/B2: include both concrete and abstract vocabulary
            - For C1/C2: include formal, literary, or domain-specific vocabulary

            Return a JSON array of exactly ${count} objects. No other text.`;
}

function buildWordEnrichmentPrompt(terms: string[]): string {
  const termList = terms.map((t) => `- ${t.trim()}`).join("\n");

  return `You are given the following German words. For each word, generate a complete vocabulary entry.

          Words to process:
          ${termList}

          Rules:
          - Process EVERY word in the list — do not skip any
          - "term": write only the bare word, without the article (e.g. "Buch", not "das Buch")
          - "article": MUST be "der", "die", or "das" for nouns. Set to null for verbs, adjectives, adverbs, prepositions
          - "pluralForm": full plural form with "die" (e.g. "die Bücher"). null if not a noun or has no plural
          - "definitionEng": clear English definition, 1-2 sentences
          - "definitionTr": clear Turkish definition, 1-2 sentences
          - "exampleSentence": a natural, grammatically correct German sentence using the word
          - "level": assign the correct CEFR level ("A1" | "A2" | "B1" | "B2" | "C1" | "C2") based on how commonly the word is used

          Return a JSON array with exactly ${terms.length} objects. No other text.`;
}

async function generateWordsForLevel(level: Level): Promise<WordCandidate[]> {
  const response = await client.models.generateContent({
    model: "gemini-3-flash-preview",
    config: {
      systemInstruction: SYSTEM_PROMPT,
      responseMimeType: "application/json",
      temperature: 0.7,
      topP: 0.9,
    },
    contents: buildWordGenerationPrompt(level),
  });

  const words = JSON.parse(response.text ?? "[]") as WordCandidate[];

  return words.map((w) => ({
    term: w.term.trim(),
    article: w.article ?? null,
    pluralForm: w.pluralForm ?? null,
    definitionEng: w.definitionEng,
    definitionTr: w.definitionTr,
    exampleSentence: w.exampleSentence,
    level: w.level,
  }));
}

export async function generateWords(
  levels: Level | Level[],
): Promise<WordCandidate[]> {
  const levelArray = Array.isArray(levels) ? levels : [levels];

  const results = await Promise.all(
    levelArray.map((level) => generateWordsForLevel(level)),
  );

  return results.flat();
}

function parseTermInput(input: string): string[] {
  return input
    .split(/[\n,;]+/)
    .map((t) => t.trim())
    .filter((t) => t.length > 0);
}

export async function enrichWords(rawInput: string): Promise<WordCandidate[]> {
  const terms = parseTermInput(rawInput);

  if (terms.length === 0) {
    throw new Error("No valid terms provided.");
  }

  const response = await client.models.generateContent({
    model: "gemini-3-flash-preview",
    config: {
      systemInstruction: SYSTEM_PROMPT,
      responseMimeType: "application/json",
      temperature: 0.3,
      topP: 0.9,
    },
    contents: buildWordEnrichmentPrompt(terms),
  });

  const words = JSON.parse(response.text ?? "[]") as WordCandidate[];

  if (words.length !== terms.length) {
    console.warn(`Expected ${terms.length} words, got ${words.length}`);
  }

  return words.map((w) => ({
    term: w.term.trim(),
    article: w.article ?? null,
    pluralForm: w.pluralForm ?? null,
    definitionEng: w.definitionEng,
    definitionTr: w.definitionTr,
    exampleSentence: w.exampleSentence,
    level: w.level,
  }));
}
