import { Button } from "antd";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  console.log("🚀 ~ AddWithAI ~ pending:", pending);
  return (
    <Button
      type="primary"
      className="w-full"
      htmlType="submit"
      loading={pending}
      disabled={pending}
    >
      {pending ? "Adding new words..." : "Add to Library"}
    </Button>
  );
}

export default SubmitButton;
