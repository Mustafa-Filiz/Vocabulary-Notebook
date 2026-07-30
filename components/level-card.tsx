"use client";

import { Level } from "@/generated/prisma/enums";
import { Card, Typography } from "antd";

interface LevelCardProps {
  level: Level;
  wordCount: number;
}

function LevelCard({ level, wordCount }: LevelCardProps) {
  return (
    <Card title={level}>
      <Typography.Paragraph>{wordCount} words</Typography.Paragraph>
    </Card>
  );
}

export default LevelCard;
