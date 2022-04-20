import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import img1 from "./images/item-1.jpeg";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <img src={img1} />
  </React.StrictMode>
);
