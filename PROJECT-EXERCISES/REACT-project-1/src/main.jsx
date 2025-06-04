import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Wrapper from "./components/Wrapper.jsx";

import "./index.css";
createRoot(document.getElementById("root")).render(
  <Wrapper>
    <App />
    <ToastContainer position="top-center" />
  </Wrapper>
);
