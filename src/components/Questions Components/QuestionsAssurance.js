import React from "react";
import Enfant from "../../Assets/images/Svg/Enfant";
import Partenaire from "../../Assets/images/Svg/Partenaire";
import VousMeme from "../../Assets/images/Svg/VousMeme";

export default function QuestionsAssurance(props) {
  const { question, assuranceE, assuranceP, handleAssurance } = props;

  return (
    <div className="flex flex-col items-center">
      <h1 className="question">{question}</h1>
      <p className="hint">{props?.hint}</p>
      <div className="flex md:flex-row flex-col w-3/4 md:justify-center gap-5">
        <label htmlFor="VousMeme">
          <div className="card2  bg-red-300 flex justify-between items-center md:flex-col flex-row md:p-6 p-2 rounded-2xl ">
            <input
              type="checkbox"
              id="VousMeme"
              checked
              className=" md:self-end  h-4 w-4 order-3 md:order-1"
              disabled
            />
            <div className="cardBox2  self-start order-1 ">
              <VousMeme />
            </div>
            <p className=" text-sm md:text-base order-2">Vous meme</p>
          </div>
        </label>
        <label htmlFor="partenaire">
          <div
            className="card3  bg-red-300 flex flex-row justify-between items-center md:flex-col md:p-6 p-2 rounded-2xl"
            style={{ backgroundColor: assuranceP ? "#feb794" : "transparent" }}
          >
            <input
              type="checkbox"
              id="partenaire"
              className=" md:self-end  h-4 w-4 order-3 md:order-1"
              value={assuranceP}
              onChange={handleAssurance}
              checked = {assuranceP}
            />
            <div className="cardBox3 order-2">
              <Partenaire />
            </div>
            <p className=" text-sm md:text-base md:order-3 order-2">Votre partenaire</p>
          </div>
        </label>
        <label htmlFor="enfant">
          <div
            className="card1 bg-red-300 flex flex-row justify-between items-center md:flex-col md:p-6 p-2 rounded-2xl"
            style={{ backgroundColor: assuranceE ? "#5ab1a4" : "transparent" }}
          >
            <input
              type="checkbox"
              id="enfant"
              value={assuranceE}
              onChange={handleAssurance}
              checked = {assuranceE}
              className="md:self-end   h-4 w-4 order-3 md:order-1 "
            />
            <div className="cardBox1 order-2">
              <Enfant />
            </div>
            <p className=" text-sm md:text-base md:order-3 order-2">Vos enfants</p>
          </div>
        </label>
      </div>
    </div>
  );
}
