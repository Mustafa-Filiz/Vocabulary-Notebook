import { Level } from "@/generated/prisma/enums";

export function isLevelType(level: string): level is Level {
  return Object.values(Level).includes(level as Level);
}
