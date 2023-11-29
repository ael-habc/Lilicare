import React from "react";
import { Progress } from "antd";

export default function ProgressBarx(props) {
  const { number, questions } = props;
  return (
    <div className="mb-2 flex gap-0">
      <Progress
        variety="success"
        percent={number >= 1 ? 100 : 50}
        size={[100, 10]}
        showInfo={false}
      />
      <Progress
        percent={number >= 2 ? 100 : 0}
        size={[100, 10]}
        showInfo={false}
      />
      <Progress
        percent={number < 3 ? 0 : number >= 4 ? 100 : 50}
        size={[100, 10]}
        showInfo={false}
      />
      <Progress
        percent={number >= 5 ? 100 : 0}
        size={[100, 10]}
        showInfo={false}
      />
      <Progress
        percent={number >= 6 ? 100 : 0}
        size={[100, 10]}
        showInfo={false}
      />
      <Progress
        percent={number < 7 ? 0 : number === 7 ? 50 : 100}
        size={[100, 10]}
        showInfo={false}
      />
      <p className=" hidden md:block">
      {Math.ceil((number / (questions.length - 1)) * 100)}%{" "}
      </p>
    </div>
  );
}
