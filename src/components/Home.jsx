import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Topic from "./Topic";
import banner from "../assets/Banner.jpg";
const Home = () => {
  const { data } = useLoaderData();
  // console.log(data);
  return (
    <section>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              A quiz refers to a short test of knowledge, typically around 10
              questions in length, with question formats often including
              multiple choice, fill in the blanks, true or false and short
              answer.
            </p>
            <Link to="/topics">
              {" "}
              <button className="btn btn-primary">Let's Start</button>
            </Link>
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
