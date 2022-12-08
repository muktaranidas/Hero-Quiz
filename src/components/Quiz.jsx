import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "./Questions";

const Quiz = () => {
  const { data } = useLoaderData();
  const { name, total, questions } = data;
  // console.log(data);
  return (
    <div>
      <h1 className="text-4xl text-pink-500 text-center  font-bold">
        Quiz of {name}
      </h1>
      <h3 className="text-4xl text-pink-500 text-center  font-bold mt-6">
        Total Question: {total}
      </h3>
      <div className="">
        {questions.map((question, _idx) => (
          <Questions key={_idx} question={question}></Questions>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
