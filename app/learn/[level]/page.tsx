import PageHeader from "@/components/page-header";
import WordCard from "@/components/word-card";
import { getWordsByLevel } from "@/services/get-words-by-level";

async function LevelPage({ params }: { params: Promise<{ level: string }> }) {
  const { level } = await params;
  const words = await getWordsByLevel(level);

  return (
    <div>
      <PageHeader title={`${level} Words`} hasBackButton />
      <div className="words-area flex flex-col gap-2">
        {words?.map((word) => (
          <WordCard key={word.id} word={word} />
        ))}
      </div>
    </div>
  );
}

export default LevelPage;
