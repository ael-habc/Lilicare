import React from "react";

export default function BackButton({ number, setNumber }) {
  return (
    <button
      className=" text-CustomBlue font-ManropeBold hover:cursor-pointer hover:text-sky-900 gap-1 flex justify-center items-center  mt-8 lg:py-4 self-start text-lg"
      onClick={() => setNumber(number - 1)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 inline-block "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M15 19l-7-7 7-7" />
      </svg>
      Question précédente
    </button>
  );
}
