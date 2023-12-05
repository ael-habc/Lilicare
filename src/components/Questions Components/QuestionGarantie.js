import React,{useState} from "react";
import { Radio } from "antd";

export default function QuestionGarantie(props) {
  const { question, garantie, handleGarantie } = props;
  const [value2, setValue2] = useState("minimum");
  const onChange2 = ({ target: { value } }) => {
    setValue2(value);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="question">{question}</h1>
      <p className="hint">{props?.hint}</p>
      <Radio.Group
        options={props.answers}
        onChange={handleGarantie}
        value={garantie}
        optionType="button"
        buttonStyle="solid"
        className="h-12 w-96 mt-6"
      />
    </div>
  );
}
