import React, { useState } from "react";

function QA({ question, answer }) {
  const [openAnswer, setOpenAnswer] = useState(false);

  const handleClick = () => {
    setOpenAnswer(!openAnswer);
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="flex items-center justify-between w-full px-5 py-4 bg-white"
        type="button"
      >
        <h3 className="block pr-4 text-left">
          <p className="text-[18px] leading-[26px] font-semibold text-neutral-ink-600">
            {question}
          </p>
        </h3>
        <div className="w-4 text-neutral">
          <div>
            <svg
              className={`${openAnswer === false ? "" : "hidden" } inline-block align-middle`}
              width="24"
              height="24"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M24.0605 10L24.0239 38"
                stroke="#333"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M10 24L38 24"
                stroke="#333"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <svg
              className={`${openAnswer === false ? "hidden" : "" } inline-block align-middle`}
              width="24"
              height="24"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M10.5 24L38.5 24"
                stroke="#333"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        </div>
      </button>
      <div
        className={`${openAnswer === false ? "hidden" : "" } pb-4 pl-5 pr-16 font-normal text-neutral-ink-600`}
      >
        <p>{answer}</p>
      </div>
    </>
  );
}

export default QA;
