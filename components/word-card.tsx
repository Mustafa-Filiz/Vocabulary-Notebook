"use client";

import { Article, Word } from "@/generated/prisma/client";
import { Button, Card, Typography } from "antd";
import { LuBookCheck } from "react-icons/lu";

const ARTICLE_COLOR = {
  der: "text-blue-600",
  die: "text-red-600",
  das: "text-green-600",
} satisfies Record<Article, string>;

interface WordCardProps {
  word: Word;
  markAsLearned: (id: number) => void;
}

function WordCard({ word, markAsLearned }: WordCardProps) {
  return (
    <Card
      loading={!word}
      title={
        <>
          {word.article ? `${word.article} ` : ""}
          {word.term}
        </>
      }
      classNames={{
        title: word.article ? ARTICLE_COLOR[word.article] : "",
        body: "flex flex-col gap-2",
      }}
      extra={
        <Button
          onClick={() => markAsLearned(word.id)}
          shape="circle"
          type="text"
          icon={<LuBookCheck size={28} color="green" />}
        />
      }
    >
      <Typography.Text>{word.definitionEng}</Typography.Text>
      <Typography.Text>{word.definitionTr}</Typography.Text>
    </Card>
  );
}

export default WordCard;

// className={word.article ?? ARTICLE_COLOR[word.article]}
