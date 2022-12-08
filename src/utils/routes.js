import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import ErrorPage from "../components/ErrorPage";
import Statistics from "../components/Statistics";
import Blog from "../components/Blog";
import Home from "../components/Home";
import Quiz from "../components/Quiz";
import Topics from "../components/Topics";
// import Topics from "../components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: async () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
        element: <Home></Home>,
      },
      {
        path: "/home",
        loader: async () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
        element: <Home></Home>,
      },
      {
        path: "/topics",
        loader: async () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
        element: <Topics></Topics>,
      },

      {
        path: "/topics/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.id}`
          );
        },
        element: <Quiz></Quiz>,
      },
      {
        path: "/statistics",
        loader: async () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
        element: <Statistics></Statistics>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
