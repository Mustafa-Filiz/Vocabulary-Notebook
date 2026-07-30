import { isLevelType } from "@/helpers/level-type-check";
import { prisma } from "@/lib/prisma";

export async function getWordsByLevel(level: string) {
  if (!isLevelType(level)) return;

  const words = await prisma.word.findMany({
    where: { level },
  });

  return words;
}
