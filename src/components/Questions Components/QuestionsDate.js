import React from "react";

import { Input } from "antd";
import { CalendarTwoTone } from "@ant-design/icons";



export default function QuestionsText(props) {
  const { question } = props;
  return (
    <div className="flex flex-col items-center ">
      <h1 className="question">{question}</h1>
      <p className="hint">{props?.hint}</p>
      <div className="flex flex-col w-2/6 pt-10">
        <label htmlFor="text" className="label">
          {props?.label}
        </label>
        <Input
          id="text"
          type="date"
          size="large"
          className="h-12 rounded-2xl"
          prefix={<CalendarTwoTone />}
        />
      </div>
    </div>
  );
}
