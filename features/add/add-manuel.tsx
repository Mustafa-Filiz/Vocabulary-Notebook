"use client";

import { Form, Input, message, Typography } from "antd";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import SubmitButton from "./submit-button";
import { addWordsFromList } from "@/app/add/actions";
import { useActionState, useEffect } from "react";

const initialState = { success: false, message: "qwer" };

function AddManuel() {
  const [state, formAction] = useActionState(addWordsFromList, initialState);

  useEffect(() => {
    if (state.success === true) {
      message.success(state.message);
    } else if (state.success === false) {
      message.error(state.message);
    }
  }, [state]);

  return (
    <div className="flex flex-col gap-2 rounded-2xl p-2 shadow-md">
      <Typography.Title level={3} className="flex items-center gap-2">
        <HiOutlinePencilSquare /> Manuel Entry
      </Typography.Title>
      <Typography.Paragraph className="m-0!">
        Type any German words with commas in between
      </Typography.Paragraph>
      <form action={formAction}>
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
