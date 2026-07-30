import LevelCard from "@/components/level-card";
import PageHeader from "@/components/page-header";
import { getLevels } from "@/services/get-levels";
import { Button } from "antd";
import Link from "next/link";
import { FaRegCirclePlay } from "react-icons/fa6";

async function LearnContainer() {
  const levels = await getLevels();
  console.log("🚀 ~ LearnContainer ~ levels:", levels);
  return (
    <div>
      <PageHeader title="Welcome" />
      <div className="level-card-area grid grid-cols-2 gap-2">
        {levels.map((item) => (
          <Link key={item.level} href={`/learn/${item.level}`}>
            <LevelCard level={item.level} wordCount={item.wordCount} />
          </Link>
        ))}
      </div>
      {/* <Link href="/learn/session">
        <Button type="primary" icon={<FaRegCirclePlay />}>
          New Learning Session
        </Button>
      </Link> */}
    </div>
  );
}

export default LearnContainer;
