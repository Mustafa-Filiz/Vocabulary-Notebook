"use server";

import { Level } from "@/generated/prisma/client";
import { enrichWords, generateWords } from "@/lib/gen-ai";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

interface AddResponse {
  success: boolean;
  message: string;
}

export async function addWordsWithAi(
  prevState: AddResponse,
  formData: FormData,
) {
  const levels = formData.get("levels") as Level;

  if (!levels)
    return {
      success: false,
      message: "Missing levels.",
    };

  try {
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

    return {
      success: true,
      message: `${result.length} new words added.`,
    };
  } catch (error) {
    return { success: false, message: "Try again." };
  }
}

export async function addWordsFromList(
  prevState: AddResponse,
  formData: FormData,
) {
  const wordsInput = formData.get("words-input") as string;

  if (!wordsInput || wordsInput.length === 0)
    return {
      success: false,
      message: "No words provided.",
    };

  try {
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

    return {
      success: true,
      message: `${result.length} new words added.`,
    };
  } catch (error) {
    return { success: false, message: "Try again." };
  }
}
