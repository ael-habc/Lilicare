import React from "react";

export default function QuestionImportance(props) {
  const { question, handleAssuranceSante } = props;
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  handleAssuranceSante(checked, checked2);
  return (
    <div className="flex flex-col items-center">
      <h1 className="question">{question}</h1>
      <p className="hint">{props?.hint}</p>
      <div className="flex flex-col gap-5 pt-7 w-4/6 md:w-3/6 ">
        <label htmlFor="1">
          <div
            className="cardX1  flex items-center gap-2 justify-between px-6 py-3 rounded-2xl"
            style={{ backgroundColor: checked ? "#fff" : "transparent" }}
          >
            <p className="text-[16px] w-11/12">{props.answers[0].answer}</p>
            <input
              type="radio"
              id="1"
              name="sante"
              className="h-4 w-4"
              onChange={() => (setChecked(!checked), setChecked2(false))}
            />
          </div>
        </label>
        <label htmlFor="2">
          <div
            className="cardX1  flex items-center gap-3 justify-between px-6 py-3 rounded-2xl"
            style={{ backgroundColor: checked2 ? "#fff" : "transparent" }}
          >
            <p className="text-[16px] w-11/12">{props.answers[1].answer}</p>
            <input
              type="radio"
              id="2"
              name="sante"
              className="h-4 w-4"
              onChange={() => (setChecked2(!checked2), setChecked(false))}
            />
          </div>
        </label>
      </div>
    </div>
  );
}
