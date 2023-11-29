import React, { useState } from "react";
import "./App.css";

// json files (Questions.json)
import qustions from "./Assets/json files/Questions.json";

// components
import Nav from "./components/Nav";
import BackButton from "./components/BackButton";
import ProgressBarx from "./components/ProgressBar";
import QuestionsText from "./components/Questions";
//custom Components

function App() {
  const questions = qustions.Questions;
  const [number, setNumber] = useState(1);

  return (
    <div className="">
      <Nav />
      <main>
        {number > 0 && <BackButton setNumber={setNumber} number={number} />}
        <div className="flex gap-3 w-3/4">
          <ProgressBarx number={number} questions={questions} />
        </div>
        <div className="">
          <h1>
            Etap {questions[number].etap} /{" "}
            {questions[questions.length - 1].etap} - {" "}
            {questions[number].etap_name}
          </h1>
        </div>
        <div>
            <QuestionsText {...questions[number]} />
        </div>
      </main>
      <button onClick={() => setNumber(number + 1)} className=" bg-white">Next</button>
    </div>
  );
}

export default App;
