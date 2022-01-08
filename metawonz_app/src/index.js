import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
