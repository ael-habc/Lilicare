import React from "react";

import { Input } from "antd";
import { CalendarTwoTone } from "@ant-design/icons";



export default function QuestionsContract(props) {
  const {question , contract, handleContract} = props;
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
            type='date'
            size="large"
            value={contract}
            onChange={handleContract}
            max={new Date().toISOString().split("T")[0]}

            className="h-12 appearance-none"
            prefix={<CalendarTwoTone />}
          />
      </div>
    </div>
  );
}
