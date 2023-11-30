import React from "react";

import { Input } from "antd";
import { CalendarTwoTone } from "@ant-design/icons";



export default function QuestionsText(props) {
  const { question } = props;
  console.log(question);
  return (
    <div className="flex flex-col items-center ">
      <h1 className="question">{question}</h1>
      <p className="hint">{props?.hint}</p>
      <div className="flex flex-col w-2/4 pt-10">
        <label htmlFor="text" className="label">
          {props?.label}
        </label>
        <Input
          id="text"
          type="date"
          size="large"
          className="h-12"
          prefix={<CalendarTwoTone />}
        />
      </div>
    </div>
  );
}
