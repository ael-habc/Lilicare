import React, { useState } from "react";
import "./App.css";

// json files (Questions.json)
import qustions from "./Assets/json files/Questions.json";

// components
import Nav from "./components/Nav";
import BackButton from "./components/BackButton";
import ProgressBarx from "./components/ProgressBarx";
import { Button } from "antd";

// Questions Components
import QuestionsCP from "./components/Questions Components/QuestionsCP";
import QuestionsDate from "./components/Questions Components/QuestionsDate";
import QuestionsAssurance from "./components/Questions Components/QuestionsAssurance";
import QuestionsGarantie from "./components/Questions Components/QuestionGarantie";


//custom Components

function App() {
  const questions = qustions.Questions;
  const [number, setNumber] = useState(2);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Nav />
      <main className="md:w-4/5 w-full flex flex-col  items-center">
        {number > 0 ? (
          <BackButton setNumber={setNumber} number={number} />
        ) : (
          <div className="h-[5.8rem]"></div>
        )}
        <div className="">
          <h1 className=" font-ManropeBold font-bold text-[24px] text-[#22496b]">
            Etap {questions[number].etap} /{" "}
            {questions[questions.length - 1].etap} -{" "}
            {questions[number].etap_name}
          </h1>
        </div>
        <ProgressBarx number={number} questions={questions} />

        <div className="w-full">
          {number === 0 && <QuestionsDate {...questions[number]} />}
          {number === 1 && <QuestionsCP {...questions[number]} />}
          {number === 2 && <QuestionsAssurance {...questions[number]} />}
          {number === 3 && <QuestionsGarantie {...questions[number]} />}
          {number === 4 && <QuestionsCP {...questions[number]} />}
          {number === 5 && <QuestionsCP {...questions[number]} />}
          {number === 6 && <QuestionsCP {...questions[number]} />}
          {number === 7 && <QuestionsCP {...questions[number]} />}
          {number === 8 && <QuestionsCP {...questions[number]} />}
          {number === 9 && <QuestionsCP {...questions[number]} />}
          
        </div>
      </main>

      {number < questions.length ? (
        <Button
          type="primary"
          size="large"
          onClick={() => setNumber(number + 1)}
          className=" text-white bg-CustomBlue text-[20px] font-ManropeBold hover:cursor-pointer hover:bg-red-300 hover:text-CustomBlue gap-1 flex justify-center items-center  mt-8 lg:py-4 "
        >
          Question suivante
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      ) : (
        <div className="h-[5.8rem]"></div>
      )}
    </div>
  );
}

export default App;
