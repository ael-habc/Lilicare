import React from "react";
import Enfant from "../../Assets/images/Svg/Enfant";
import Partenaire from "../../Assets/images/Svg/Partenaire";
import VousMeme from "../../Assets/images/Svg/VousMeme";

export default function QuestionsAssurance(props) {
  const { question } = props;

  return (
    <div className="flex flex-col items-center">
      <h1 className="question">{question}</h1>
      <p className="hint">{props?.hint}</p>
      <div className="card1 bg-red-300 flex flex-col p-6 rounded-2xl">
        <input type="checkbox1" id="enfant" checked className=" self-end" />
        <div className="cardBox">
          <svg
            width="80"
            height="82"
            viewBox="0 0 80 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Illustrations">
              <path
                id="Vector"
                d="M75.5173 29.1222C79.4716 44.6516 69.0264 61.525 55.5968 70.4096C42.0926 79.2942 25.604 80.1902 15.3826 72.7241C5.08656 65.1833 1.05768 49.2806 5.31039 33.3032C9.6377 17.2511 22.2466 1.12442 37.6906 0.228488C53.2093 -0.742101 71.563 13.5181 75.5173 29.1222Z"
              ></path>
              <g id="Group 2608997">
                <path
                  id="Vector 79"
                  d="M48.4847 37.2169C49.9998 39.3381 55.8195 40.601 58.6134 42.3669C64.8485 46.3076 60.3053 53.0725 52.7273 53.2773C36.4579 53.7171 25.415 36.2109 23.4363 30.9343C21.4576 25.6577 23.5945 20.1639 29.0909 19.9441C33.5909 19.7641 36.9695 23.2776 40.6879 30.0549"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  id="Vector 82"
                  d="M47.8143 21.6072C46.3549 26.2216 42.7723 29.1762 38.3819 31.499C37.7086 31.8552 37.2525 32.5521 37.3895 33.3015C38.0254 36.7803 41.2022 40.4967 45.1197 41.2998C46.0172 41.4838 46.8143 40.8328 47.1092 39.9654C48.5126 35.838 51.5007 31.5576 56.3643 29.6402C61.8189 27.49 67.374 21.6072 60.6503 15.784C53.9267 9.96066 49.3946 16.6101 47.8143 21.6072Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  id="Vector 83"
                  d="M25.4549 35.0957C18.4853 36.6109 11.5155 41.7777 11.5156 49.3381C11.5157 52.9001 13.3967 56.6779 17.2732 60.2471C22.6004 65.1518 26.8957 68.126 33.9399 66.3078C39.5008 64.8725 43.3219 56.0048 43.3219 51.9419"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  id="Vector 84"
                  d="M28.3611 39.9434C24.6008 40.5062 17.0803 43.8833 17.948 48.9489C18.8158 54.0146 25.7579 62.1759 31.2537 61.0502C35.6503 60.1496 37.9065 52.9827 38.485 49.5118"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <label htmlFor="enfant">Enfant</label>
      </div>
    </div>
  );
}
