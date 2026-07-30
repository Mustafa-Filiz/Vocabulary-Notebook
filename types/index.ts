import type { Article, Level } from "@/generated/prisma/client";

export interface WordCandidate {
  term: string;
  article: Article | null;
  pluralForm: string | null;
  definitionEng: string;
  definitionTr: string;
  exampleSentence: string;
  level: Level;
}
