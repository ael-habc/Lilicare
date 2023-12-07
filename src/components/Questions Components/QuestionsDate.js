import React from "react";

import { Input } from "antd";
import { CalendarTwoTone } from "@ant-design/icons";



export default function QuestionsDate(props) {
  const { question, date, handleDate } = props;
  return (
    <div className="flex flex-col items-center ">
      <h1 className="question">{question}</h1>
      <p className="hint">{props?.hint}</p>
      <div className="flex flex-col w-5/6 md:w-4/6 pt-10">
        <label htmlFor="text" className="label mb-1">
          {props?.label}
        </label>
        <Input
          id="text"
          type="date"
          size="large"
          value={date}
          onChange={handleDate}
          min={"1900-01-01"}
          max={new Date().toISOString().split("T")[0]}
          className="h-12 rounded-2xl"
          prefix={<CalendarTwoTone />}
        />
      </div>
    </div>
  );
}
