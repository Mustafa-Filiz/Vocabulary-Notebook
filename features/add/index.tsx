import { Divider } from "antd";
import AddManuel from "./add-manuel";
import AddWithAI from "./add-with-ai";
import PageHeader from "@/components/page-header";

async function AddContainer() {
  return (
    <div className="flex flex-col gap-2 pb-4">
      <PageHeader title="Add New Words" />
      <AddWithAI />
      <Divider className="m-0!">or</Divider>
      <AddManuel />
    </div>
  );
}

export default AddContainer;
