"use server";

import { Level } from "@/generated/prisma/client";
import { enrichWords, generateWords } from "@/lib/gen-ai";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function listWords() {}

export async function addWordsWithAi(formData: FormData) {
  const levels = formData.get("levels") as Level;

  if (!levels) return;

  const newWords = await generateWords(levels);

  const result = await prisma.word.createManyAndReturn({
    data: newWords.map((word) => ({
      term: word.term,
      article: word.article,
      definitionTr: word.definitionTr,
      definitionEng: word.definitionEng,
      pluralForm: word.pluralForm,
      level: word.level,
      exampleSentence: word.exampleSentence,
    })),
    skipDuplicates: true,
  });

  revalidatePath("/learn");

  window.alert("New words added.");
}

export async function addWordsFromList(formData: FormData) {
  const wordsInput = formData.get("words-input") as string;

  if (!wordsInput || wordsInput.length === 0) return;

  const newWords = await enrichWords(wordsInput);

  const result = await prisma.word.createManyAndReturn({
    data: newWords.map((word) => ({
      term: word.term,
      article: word.article,
      definitionTr: word.definitionTr,
      definitionEng: word.definitionEng,
      pluralForm: word.pluralForm,
      level: word.level,
      exampleSentence: word.exampleSentence,
    })),
    skipDuplicates: true,
  });

  revalidatePath("/learn");

  window.alert("New words added.");
}
