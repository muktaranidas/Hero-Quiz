import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "./Topic";

const Home = () => {
  const { data } = useLoaderData();
  // console.log(data);
  return (
    <section>
      <div className=" container flex justify-center items-center  ">
        <div className="text-center w-1/2">
          <img
            src="https://thumbs.dreamstime.com/b/girl-standing-book-holding-quiz-placard-smart-school-hand-inviting-to-play-young-reader-erudite-ready-to-answer-82348976.jpg"
            alt=""
          />
        </div>

        <div className="text-center w-1/2 mr-12">
          <div className="  text-center lg:pb-56 md:py-32 lg:px-70 flex flex-col  text-gray-900">
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome To Hero Quiz
            </h1>
            <p className="mt-6 text-lg  text-gray-900">
              Quizzes encourage pupils' self awareness of progress and self
              assessment. By taking quizzes, pupils get instant feedback on
              their responses. And this can help them identify areas they need
              to develop themselves and highlight progress for them to be proud
              of.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
          {data.map((topic) => (
            <Topic key={topic.id} topic={topic}></Topic>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
