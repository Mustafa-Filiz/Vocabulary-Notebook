import PageHeader from "@/components/page-header";
import { getWordsByLevel } from "../actions";
import LevelContainer from "@/features/level";

async function LevelPage({ params }: { params: Promise<{ level: string }> }) {
  const { level } = await params;
  const words = await getWordsByLevel(level);

  return (
    <div>
      <PageHeader title={`${level} Words`} hasBackButton />
      <div className="words-area flex flex-col gap-2 pt-2 pb-8">
        <LevelContainer words={words} />
      </div>
    </div>
  );
}

export default LevelPage;
