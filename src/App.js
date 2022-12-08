import React from "react";
import { RouterProvider } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import router from "./utils/routes";
// toast.configure();

function App() {
  return <RouterProvider router={router}></RouterProvider>;
  // <ToastContainer></ToastContainer>;
}

export default App;
