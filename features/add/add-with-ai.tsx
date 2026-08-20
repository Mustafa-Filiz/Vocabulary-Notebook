"use client";

import { addWordsWithAi } from "@/app/add/actions";
import { Checkbox, Form, message, Typography } from "antd";

import { GrGenai } from "react-icons/gr";
import SubmitButton from "./submit-button";
import { useActionState, useEffect, useState } from "react";

const initialState = { success: false, message: "asdf" };

function AddWithAI() {
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [state, formAction] = useActionState(addWordsWithAi, initialState);

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
        <GrGenai /> AI Magic
      </Typography.Title>
      <Typography.Paragraph className="m-0!">
        Select levels that you want to add to your library
      </Typography.Paragraph>
      <form action={formAction}>
        <Form component={false}>
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
