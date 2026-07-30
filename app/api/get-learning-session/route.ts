import { isLevelType } from "@/helpers/level-type-check";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ level: string }> },
) {
  const { level } = await params;

  if (!isLevelType(level)) return;

  const selectedWords = await prisma.word.findMany({
    where: {
      level,
    },
  });

  return Response.json(selectedWords);
}
