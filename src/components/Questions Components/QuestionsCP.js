import React from "react";

import { Input } from "antd";
import { EnvironmentTwoTone } from "@ant-design/icons";



export default function QuestionsCP(props) {
  const {question , codePostal, handleCodePostal} = props;
  return (
    <div className="flex flex-col items-center ">
      <h1 className="question">{question}</h1>
      <p className="hint">{props?.hint}</p>
      <div className="flex flex-col w-5/6 md:w-4/6 pt-10">
        <label htmlFor="text" className="label">
          {props?.label}
        </label>
          <Input
            id="text"
            type='text'
            size="large"
            maxLength={5}
            value={codePostal}
            onChange={handleCodePostal}
            className="h-12"
            prefix={<EnvironmentTwoTone />}
          />
      </div>
    </div>
  );
}
