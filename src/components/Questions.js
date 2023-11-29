import React from "react";

import { Input } from "antd";
import {
  UserOutlined,
  CalculatorOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

export default function QuestionsText(props) {
  const { question, type } = props;
  console.log(question);
  return (
    <div>
      <h1>{question}</h1>
      <p>{props?.hint}</p>
      <div className="flex flex-col gap-2">
        {props?.label}
        {type === "text" && (
          <Input type={type} size="large" prefix={<EnvironmentOutlined />} />
        )}
        {type === "date" && (
          <Input type={type} size="large" prefix={<CalculatorOutlined />} />
        )}

       
      </div>
    </div>
  );
}
