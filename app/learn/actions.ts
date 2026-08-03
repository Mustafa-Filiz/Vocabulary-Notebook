"use server";

import { prisma } from "@/lib/prisma";
import { Word } from "@/generated/prisma/client";
import { Level } from "@/generated/prisma/enums";
import { isLevelType } from "@/helpers/level-type-check";
import { cacheTag, revalidatePath } from "next/cache";
import { revalidateTag } from "next/cache";

export async function getLearningSession(level: Level) {
  const randomWords = await prisma.$queryRaw<Word[]>`
    SELECT * FROM "Word"
    ORDER BY RANDOM()
    LIMIT 10
  `;
  return randomWords;
}

export async function getLevels() {
  const raw = await prisma.word.groupBy({
    by: ["level"],
    _count: { id: true },
    where: {
      level: { not: undefined },
    },
    orderBy: {
      level: "asc",
    },
  });

  const levels = raw.map((i) => ({
    level: i.level,
    wordCount: i._count.id,
  }));

  return levels;
}

export async function getWordsByLevel(level: string) {
  if (!isLevelType(level)) return;

  const words = await prisma.word.findMany({
    where: {
      AND: {
        level,
        learnedAt: null,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return words;
}

export async function markAsLearned(wordId: number) {
  const now = new Date();

  const word = await prisma.word.update({
    where: {
      id: wordId,
    },
    data: {
      learnedAt: now,
    },
  });

  revalidatePath(`/level/${word.level}`);
}
