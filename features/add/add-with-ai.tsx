"use client";

import { addWordsWithAi } from "@/app/add/actions";
import { Checkbox, Form, message, Typography } from "antd";

import { GrGenai } from "react-icons/gr";
import SubmitButton from "./submit-button";
import { useActionState, useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";

const initialState = { success: false, message: "" };

function AddWithAI() {
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [state, formAction] = useActionState(addWordsWithAi, initialState);

  const [form] = useForm();

  useEffect(() => {
    if (state.message.length === 0) return;

    if (state.success === true) {
      message.success(state.message);
      form.resetFields();
    } else if (state.success === false) {
      message.error(state.message);
    }
  }, [state, form]);

  return (
    <div className="flex flex-col gap-2 rounded-2xl p-2 shadow-md">
      <Typography.Title level={3} className="flex items-center gap-2">
        <GrGenai /> AI Magic
      </Typography.Title>
      <Typography.Paragraph className="m-0!">
        Select levels that you want to add to your library
      </Typography.Paragraph>
      <form action={formAction}>
        <Form form={form} component={false}>
          <Form.Item label="Levels">
            <Checkbox.Group
              options={["A1", "B1", "C1", "A2", "B2", "C2"]}
              className="grid! grid-cols-3 gap-2"
              onChange={setSelectedLevels}
            />
          </Form.Item>
          <input
            type="hidden"
            name="levels"
            value={selectedLevels.join(", ")}
          />
          <SubmitButton />
        </Form>
      </form>
    </div>
  );
}

export default AddWithAI;
