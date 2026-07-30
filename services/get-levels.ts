import { prisma } from "@/lib/prisma";

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
