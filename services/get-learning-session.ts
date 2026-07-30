import { Word } from "@/generated/prisma/client";
import { Level } from "@/generated/prisma/enums";
import { prisma } from "@/lib/prisma";

export async function getLearningSession(level: Level) {
  const randomWords = await prisma.$queryRaw<Word[]>`
    SELECT * FROM "Word"
    ORDER BY RANDOM()
    LIMIT 10
  `;
  return randomWords;
}
