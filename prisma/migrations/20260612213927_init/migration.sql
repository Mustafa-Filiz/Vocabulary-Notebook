-- CreateEnum
CREATE TYPE "Article" AS ENUM ('der', 'die', 'das');

-- CreateEnum
CREATE TYPE "Level" AS ENUM ('A1', 'A2', 'B1', 'B2', 'C1', 'C2');

-- CreateTable
CREATE TABLE "Word" (
    "id" SERIAL NOT NULL,
    "term" TEXT NOT NULL,
    "article" "Article",
    "pluralForm" TEXT,
    "definitionEng" TEXT NOT NULL,
    "definitionTr" TEXT NOT NULL,
    "exampleSentence" TEXT NOT NULL,
    "level" "Level" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Word_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Word_term_key" ON "Word"("term");
