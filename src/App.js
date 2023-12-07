import React, { useEffect, useState } from "react";
import "./App.css";

// json files (Questions.json)
import qustions from "./Assets/json files/Questions.json";

// components
import Nav from "./components/Nav";
import BackButton from "./components/BackButton";
import ProgressBarx from "./components/ProgressBarx";

import ThanksPage from "./pages/ThanksPage";
import { Button } from "antd";

// Questions Components
import QuestionsCP from "./components/Questions Components/QuestionsCP";
import QuestionsDate from "./components/Questions Components/QuestionsDate";
import QuestionsAssurance from "./components/Questions Components/QuestionsAssurance";
import QuestionsGarantie from "./components/Questions Components/QuestionGarantie";
import QuestionImportance from "./components/Questions Components/QuestionImportance";
import QuestionAssuranceSante from "./components/Questions Components/QuestionsAssuranceSante";
import QuestionsContract from "./components/Questions Components/QuestionsContract";
import QuestionsTelephone from "./components/Questions Components/QuestionsTelephone";
import QuestionsEmail from "./components/Questions Components/QuestionsEmail";

// validation Functions
import {
  dateValidation,
  codePostalValidation,
  emailValidation,
  phoneValidation,
  contractValidation,
} from "./Assets/functions/validation";
import axios from "axios";
function App() {
  const questions = qustions.Questions;
  const [number, setNumber] = useState(0);
  const [success, setSuccess] = useState(false);

  const [utm_source, setUtm_source] = useState("");
  const [utm_medium, setUtm_medium] = useState("");
  const [utm_campaign, setUtm_campaign] = useState("");
  const [utm_term, setUtm_term] = useState("");
  const [utm_id, setUtm_id] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get("utm_source");
    const medium = urlParams.get("utm_medium");
    const campaign = urlParams.get("utm_campaign");
    const term = urlParams.get("utm_term");
    const id = urlParams.get("utm_id");
    setUtm_source(source);
    setUtm_medium(medium);
    setUtm_campaign(campaign);
    setUtm_term(term);
    setUtm_id(id);
  }, []);

  const [date, setDate] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [assuranceP, setAssuranceP] = useState(false);
  const [assuranceE, setAssuranceE] = useState(false);
  const [enfantN, setEnfantN] = useState(1);
  const [importance, setImportance] = useState([]);
  const [assuranceSante, setAssuranceSante] = useState("");
  const [contract, setContract] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");

  const [checkBoxPhoneError, setCheckBoxPhoneError] = useState(false);
  const [checkBoxEmailError, setCheckBoxEmailError] = useState(false);

  const [dateError, setDateError] = useState(true);
  const [codePostalError, setCodePostalError] = useState(true);
  const [assuranceError, setAssuranceError] = useState(false);
  const [enfantNError, setEnfantNError] = useState(true);
  const [importanceError, setImportanceError] = useState(true);
  const [assuranceSanteError, setAssuranceSanteError] = useState(true);
  const [contractError, setContractError] = useState(true);
  const [telephoneError, setTelephoneError] = useState(true);
  const [emailError, setEmailError] = useState(true);

  const handleDate = (e) => {
    setDateError("");
    setDateError(dateValidation(e.target.value));
    setDate(e.target.value);
  };

  const handleCodePostal = (e) => {
    setCodePostalError("");
    setCodePostalError(codePostalValidation(e.target.value));
    setCodePostal(e.target.value);
  };

  const handleAssurance = (e) => {
    if (e.target.id === "partenaire") {
      setAssuranceP(!assuranceP);
    } else if (e.target.id === "enfant") {
      setAssuranceE(!assuranceE);
    }
  };

  const handleEnfantNumber = () => {
    setEnfantNError(false);
  };
  const handleImportance = () => {
    if (
      importance[0] ||
      importance[1] ||
      importance[2] ||
      importance[3] ||
      importance[4]
    ) {
      setImportanceError("");
    } else {
      setImportanceError(true);
    }
  };

  const handleAssuranceSante = (checked, checked2) => {
    setAssuranceSanteError("");
    if (checked || checked2) {
      setAssuranceSanteError("");
      checked ? setAssuranceSante("oui") : setAssuranceSante("non");
    } else {
      setAssuranceSanteError(true);
    }
  };

  const handleContract = (e) => {
    setContractError("");
    setContractError(contractValidation(e.target.value));
    setContract(e.target.value);
  };

  const handleTelephone = (e) => {
    setTelephoneError("");
    setTelephoneError(phoneValidation(e.target.value));
    setTelephone(e.target.value);
  };

  const handleEmail = (e) => {
    setEmailError("");
    setEmailError(emailValidation(e.target.value));
    setEmail(e.target.value);
  };

  const handleNext = (e) => {
    if (number < questions.length - 1) {
      setNumber(number + 1);
      if (number === 2 && !assuranceE) {
        setNumber(number + 2);
      }
    } else {
      const data = {
        dateNaissance: date,
        codePostal: codePostal,
        assurance_partenaire: assuranceP,
        assurance_Enfant: assuranceE,
        enfantN: enfantN,
        choice1: importance[0],
        choice2: importance[1],
        choice3: importance[2],
        choice4: importance[3],
        choice5: importance[4],
        assurance_sante: assuranceSante,
        contract_debut: contract,
        phone: telephone,
        email: email,
        utm_source,
        utm_medium,
        utm_campaign,
        utm_term,
        utm_id,
      };

      axios.post("http://localhost:4000/users", data).then((res) => {
        setSuccess(true);
      });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleNext();
    }
  };

  return (
    <div className="pb-10">
      {!success ? (
        <div className="flex flex-col items-center mb-10 justify-center w-full">
          <Nav />
          <main className="md:w-3/5 w-full flex flex-col items-center px-5 ">
            {number > 0 ? (
              <BackButton
                setNumber={setNumber}
                number={number}
                assuranceE={assuranceE}
              />
            ) : (
              <div className="h-[5.8rem]"></div>
            )}
            <div className="">
              <h1 className="etap font-ManropeBold font-bold  text-[18px] md:text-[24px] text-[#22496b]">
                Etap {questions[number].etap} /{" "}
                {questions[questions.length - 1].etap} -{" "}
                {questions[number].etap_name}
              </h1>
            </div>
            <ProgressBarx number={number} questions={questions} />

            <form className="w-full flex flex-col">
              {number === 0 && (
                <QuestionsDate
                  date={date}
                  handleDate={handleDate}
                  {...questions[number]}
                />
              )}
              {number === 1 && (
                <QuestionsCP
                  codePostal={codePostal}
                  handleCodePostal={handleCodePostal}
                  {...questions[number]}
                />
              )}
              {number === 2 && (
                <QuestionsAssurance
                  assuranceE={assuranceE}
                  assuranceP={assuranceP}
                  handleAssurance={handleAssurance}
                  {...questions[number]}
                />
              )}
              {number === 3 && assuranceE && (
                <QuestionsGarantie
                  enfantN={enfantN}
                  handleEnfantNumber={handleEnfantNumber}
                  setEnfantN={setEnfantN}
                  {...questions[number]}
                />
              )}
              {number === 4 && (
                <QuestionImportance
                  importance={importance}
                  handleImportance={handleImportance}
                  {...questions[number]}
                />
              )}
              {number === 5 && (
                <QuestionAssuranceSante
                  handleAssuranceSante={handleAssuranceSante}
                  {...questions[number]}
                />
              )}
              {number === 6 && (
                <QuestionsContract
                  contract={contract}
                  handleContract={handleContract}
                  {...questions[number]}
                />
              )}
              {number === 7 && (
                <QuestionsTelephone
                  telephone={telephone}
                  handleTelephone={handleTelephone}
                  setCheckBoxPhoneError={setCheckBoxPhoneError}
                  {...questions[number]}
                />
              )}
              {number === 8 && (
                <QuestionsEmail
                  email={email}
                  handleEmail={handleEmail}
                  setCheckBoxEmailError={setCheckBoxEmailError}
                  {...questions[number]}
                />
              )}
                {number < questions.length ? (
            <button
                  id="next"
              type="submit"
              size="large"
              onClick={handleNext}
              onKeyUp={handleKeyPress}
              tabIndex="0"
              disabled={
                number === 0
                  ? dateError
                  : number === 1
                  ? codePostalError
                  : number === 2
                  ? assuranceError
                  : number === 3
                  ? enfantNError
                  : number === 4
                  ? importanceError
                  : number === 5
                  ? assuranceSanteError
                  : number === 6
                  ? contractError
                  : number === 7
                  ? telephoneError || checkBoxPhoneError
                  : number === 8
                  ? emailError || checkBoxEmailError
                  : false
              }
              className=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  bg-CustomBlue text-[16px] font-ManropeBold hover:cursor-pointer hover:disabled:cursor-not-allowed hover:!disabled:text-CustomBlue gap-1 flex justify-center items-center self-center  mt-8  md:w-3/6 "
            >
              {number != 8 ? "Question suivante" : "Accéder à mes offres"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ) : (
            <div className="h-[5.8rem]"></div>
          )}
            </form>
          </main>

        
        </div>
      ) : (
        <ThanksPage setNumber={setNumber} setSuccess={setSuccess}/>
      )}
    </div>
  );
}

export default App;
