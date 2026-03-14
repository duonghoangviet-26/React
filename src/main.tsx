import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Lab1 from "./page/Lab1";
import Lab2 from "./page/Lab2";
import "./index.css";
import App from "./App";
import Lab3 from "./page/Lab3";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Lab3 />
    </BrowserRouter>
  </StrictMode>
);
