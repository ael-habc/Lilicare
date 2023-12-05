import React from "react";
import Enfant from "../../Assets/images/Svg/Enfant";
import Partenaire from "../../Assets/images/Svg/Partenaire";
import VousMeme from "../../Assets/images/Svg/VousMeme";

export default function QuestionsAssurance(props) {
  const { question, assuranceE, assuranceP, handleAssurance } = props;
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);

  return (
    <div className="flex flex-col  items-center">
      <h1 className="question">{question}</h1>
      <p className="hint">{props?.hint}</p>
      <div className="flex gap-5">
        <label htmlFor="VousMeme">
          <div className="card2  bg-red-300 flex flex-col p-6 rounded-2xl">
            <input
              type="checkbox"
              id="VousMeme"
              checked
              className="  self-end h-4 w-4"
              disabled
            />
            <div className="cardBox2">
              <VousMeme />
            </div>
            <p>Vous meme</p>
          </div>
        </label>
        <label htmlFor="partenaire">
          <div
            className="card3  bg-red-300 flex flex-col p-6 rounded-2xl"
            style={{ backgroundColor: assuranceP ? "#feb794" : "transparent" }}
          >
            <input
              type="checkbox"
              id="partenaire"
              className=" self-end h-4 w-4"
              value={assuranceP}
              onChange={handleAssurance}
            />
            <div className="cardBox3">
              <Partenaire />
            </div>
            <p>Vous meme</p>
          </div>
        </label>
        <label htmlFor="enfant">
          <div
            className="card1  bg-red-300 flex flex-col p-6 rounded-2xl"
            style={{ backgroundColor: assuranceE ? "#5ab1a4" : "transparent" }}
          >
            <input
              type="checkbox"
              id="enfant"
              value={assuranceE}
              onChange={handleAssurance}
              className=" self-end h-4 w-4"
            />
            <div className="cardBox1">
              <Enfant />
            </div>
            <p>Vous meme</p>
          </div>
        </label>
      </div>
    </div>
  );
}
