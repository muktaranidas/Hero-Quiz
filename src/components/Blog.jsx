import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <div className="bg-green-300 border border-indigo-600 w-1/2 ml-28 mt-20  p-5 m-5">
        <h1 className="text-5xl font-bold text-red-500">
          1. What Is The Purpose Of React Router?
        </h1>
        <h3 className="text-2xl mt-4">
          React Router is a standard library for routing in React. It enables
          the navigation among views of various components in a React
          Application, allows changing the browser URL, and keeps the UI in sync
          with the URL. Let us create a simple application to React to
          understand how the React Router works. The application will contain
          three components: home component, about a component, and contact
          component. We will use React Router to navigate between these
          components.
        </h3>
      </div>
      <div className="bg-green-300 border border-indigo-600 w-1/2 ml-28 mt-20  p-5 m-5">
        <h1 className="text-5xl font-bold text-red-500">
          2. What Does Context API Works?
        </h1>
        <h3 className="text-2xl mt-4">
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. Context is also touted as an easier, lighter approach to
          state management usi
        </h3>
      </div>
      <div className="bg-green-300 border border-indigo-600 w-1/2 ml-28 mt-20  p-5 m-5">
        <h1 className="text-5xl font-bold text-red-500">
          3. React useRef Hook?
        </h1>
        <h3 className="text-2xl mt-4">
          useRef is like a “box” that can hold a mutable value in its .current
          property. You might be familiar with refs primarily as a way to access
          the DOM. The useRef Hook allows you to persist values between renders.
          It can be used to store a mutable value that does not cause a
          re-render when updated. It can be used to access a DOM element
          directly.
        </h3>
      </div>
    </div>
  );
};

export default Blog;
