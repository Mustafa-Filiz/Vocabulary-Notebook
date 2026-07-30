import { prisma } from "@/lib/prisma";

export async function GET() {
  const levels = await prisma.word.groupBy({
    by: ["level"],
  });

  return Response.json(levels);
}
