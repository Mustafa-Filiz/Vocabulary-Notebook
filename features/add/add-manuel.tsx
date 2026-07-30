"use client";

import { Form, Input, Typography } from "antd";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import SubmitButton from "./submit-button";
import { addWordsFromList } from "@/app/add/actions";

function AddManuel() {
  return (
    <div className="flex flex-col gap-2 rounded-2xl p-2 shadow-md">
      <Typography.Title level={3} className="flex items-center gap-2">
        <HiOutlinePencilSquare /> Manuel Entry
      </Typography.Title>
      <Typography.Paragraph className="m-0!">
        Type any German words with commas in between
      </Typography.Paragraph>
      <form action={addWordsFromList}>
        <Form component={false}>
          <Form.Item name="words-input">
            <Input.TextArea name="words-input" rows={5} />
          </Form.Item>
          <SubmitButton />
        </Form>
      </form>
    </div>
  );
}

export default AddManuel;
