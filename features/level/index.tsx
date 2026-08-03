"use client";

import { markAsLearned } from "@/app/learn/actions";
import WordCard from "@/components/word-card";
import { Word } from "@/generated/prisma/client";
import { useOptimistic } from "react";

interface LevelContainerProps {
  words?: Word[];
}

function LevelContainer({ words }: LevelContainerProps) {
  const [optimisticWords, setOptimisticWords] = useOptimistic(
    words,
    (current, removedId: number) => current?.filter((w) => w.id !== removedId),
  );

  async function handleLearned(id: number) {
    setOptimisticWords(id);
    await markAsLearned(id);
  }

  return optimisticWords?.map((word) => (
    <WordCard
      key={word.id}
      word={word}
      markAsLearned={() => handleLearned(word.id)}
    />
  ));
}

export default LevelContainer;
