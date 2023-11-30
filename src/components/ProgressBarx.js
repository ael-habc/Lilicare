import React from "react";
import { Progress } from "antd";

export default function ProgressBarx(props) {
  const { number, questions } = props;
  const color = "#3978B0";
  return (
    <div className="mb-6 mt-3 md:w-2/4 w-3/4 flex gap-0">
      <Progress
        strokeColor={color}
        percent={number >= 1 ? 100 : 50}
        // size={[30, 7]}
        showInfo={false}
      />
      <Progress
      strokeColor={color}
        percent={number >= 2 ? 100 : 0}
        // size={[30, 7]}
        showInfo={false}
      />
      <Progress
      strokeColor={color}
        percent={number < 3 ? 0 : number >= 4 ? 100 : 50}
        // size={[30, 7]}
        showInfo={false}
      />
      <Progress
      strokeColor={color}
        percent={number >= 5 ? 100 : 0}
        // size={[30, 7]}
        showInfo={false}
      />
      <Progress
      strokeColor={color}
        percent={number >= 6 ? 100 : 0}
        // size={[30, 7]}
        showInfo={false}
      />
      <Progress
      strokeColor={color}
        percent={number < 7 ? 0 : number === 7 ? 50 : 100}
        // size={[30, 7]}
        showInfo={false}
      />
      <p className=" hidden md:block font-Manrope">
        {Math.ceil((number / (questions.length - 1)) * 100)}%{" "}
      </p>
    </div>
  );
}
