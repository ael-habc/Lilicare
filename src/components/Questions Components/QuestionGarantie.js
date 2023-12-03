import React,{useState} from "react";
import { Radio } from "antd";

export default function QuestionGarantie(props) {
  const { question } = props;
  const [value2, setValue2] = useState("minimum");
  const onChange2 = ({ target: { value } }) => {
    console.log("radio2 checked", value);
    setValue2(value);
  };
  return (
    <div className="flex flex-col items-center">
      <Radio.Group
        options={props.answers}
        onChange={onChange2}
        value={value2}
        optionType="button"
        buttonStyle="solid"
      />
    </div>
  );
}
