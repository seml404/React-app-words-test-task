import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ErrorBoundry from "./components/error-boundry/error-boundry.js";
import App from "./components/app/App.js";
ReactDOM.render(
  <ErrorBoundry>
    <App />
  </ErrorBoundry>,
  document.getElementById("root")
);
