import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import { toast } from "react-toastify";

const Questions = ({ question, _idx }) => {
  const correctAns = () => toast.success("Yeahhh!! Your Ans Is Correct");
  const wrongAns = () => toast.error("Your Ans Is Wrong");
  const { options, correctAnswer } = question;

  const ans = () => toast.info(`Answer is: ${correctAnswer}`);

  const getAnswer = (data) => {
    if (data === correctAnswer) {
      correctAns();
    } else {
      wrongAns();
    }
  };
  const showAnswer = () => {
    ans();
  };
  return (
    <div className="p-3 m-6 border-2 border-indigo-600">
      <div className="flex flex-row space-x-4 ">
        <h2 className="text-red-600">{question.question}</h2>
        <FontAwesomeIcon
          onClick={showAnswer}
          className=" px-4 py-2  "
          icon={faEye}
        ></FontAwesomeIcon>
      </div>
      <div className="p-6  w-1/2">
        {options.map((option, _idx) => (
          <div getAnswer={getAnswer} key={_idx}>
            <input
              className="m-3"
              type="radio"
              name="radioo"
              onClick={() => getAnswer(option)}
              id={_idx}
            />
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
