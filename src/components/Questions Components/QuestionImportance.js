import React from "react";

export default function QuestionImportance(props) {
  const { question, importance, handleImportance } = props;
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);
  const [checked5, setChecked5] = React.useState(false);


handleImportance(importance);

  importance[0] = checked
    ? "Dépassements d’honoraires - secteur non conventionné (Option surcomplémentaire)"
    : false;
  importance[1] = checked2 ? "Chambre particulière" : false;
  importance[2] = checked3
    ? "Orthodontie et/ou Prothèse dentaire (remboursées Sécurité Sociale)"
    : false;
  importance[3] = checked4
    ? "Médecine douce (ostéopathe, chiropracteur, podologue…)"
    : false;
  importance[4] = checked5 ? "Équipements optique et/ou lentilles" : false;
  return (
    <div className="flex flex-col items-center">
      <h1 className="question">{question}</h1>
      <p className="hint">{props?.hint}</p>
      <div className="flex flex-col gap-5 pt-7 w-4/6 md:w-3/6">
        <label htmlFor="1">
          <div
            className="cardX1  flex items-center gap-2 justify-between px-6 py-3 rounded-2xl"
            style={{ backgroundColor: importance[0] ? "#fff" : "transparent" }}
          >
            <p className="text-[16px] w-11/12">{props.answers[0].answer}</p>
            <input
              type="checkbox"
              id="1"
              value={importance[0]}
              className="h-4 w-4"
              onChange={() => setChecked(!checked)}
            />
          </div>
        </label>
        <label htmlFor="2">
          <div
            className="cardX1  flex items-center gap-3 justify-between px-6 py-3 rounded-2xl"
            style={{ backgroundColor: importance[1] ? "#fff" : "transparent" }}
          >
            <p className="text-[16px] w-11/12">{props.answers[1].answer}</p>
            <input
              type="checkbox"
              id="2"
              className="h-4 w-4"
              onChange={() => setChecked2(!checked2)}
            />
          </div>
        </label>
        <label htmlFor="3">
          <div
            className="cardX1 flex items-center justify-between gap-3 px-6 py-3 rounded-2xl"
            style={{ backgroundColor: importance[2] ? "#fff" : "transparent" }}
          >
            <p className="text-[16px] w-11/12">{props.answers[2].answer}</p>
            <input
              type="checkbox"
              id="3"
              className="h-4 w-4"
              onChange={() => setChecked3(!checked3)}
            />
          </div>
        </label>
        <label htmlFor="4">
          <div
            className="cardX1  flex items-center gap-3 justify-between   px-6 py-3 rounded-2xl"
            style={{ backgroundColor: importance[3] ? "#fff" : "transparent" }}
          >
            <p className="text-[16px] w-11/12">{props.answers[3].answer}</p>
            <input
              type="checkbox"
              id="4"
              className="h-4 w-4"
              onChange={() => setChecked4(!checked4)}
            />
          </div>
        </label>
        <label htmlFor="5">
          <div
            className="cardX1  flex items-center gap-3 justify-between  px-6 py-3 rounded-2xl"
            style={{ backgroundColor: importance[4] ? "#fff" : "transparent" }}
          >
            <p className="text-[16px] w-11/12">{props.answers[4].answer}</p>
            <input
              type="checkbox"
              id="5"
              className="h-4 w-4"
              onChange={() => setChecked5(!checked5)}
            />
          </div>
        </label>
      </div>
    </div>
  );
}
