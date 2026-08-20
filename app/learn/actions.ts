"use server";

import { prisma } from "@/lib/prisma";
import { isLevelType } from "@/helpers/level-type-check";
import { revalidatePath } from "next/cache";

export async function getLevels() {
  const raw = await prisma.word.groupBy({
    by: ["level"],
    _count: { id: true },
    where: {
      AND: {
        level: { not: undefined },
        learnedAt: null,
      },
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
