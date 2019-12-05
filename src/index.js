import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import "./static/fonts/AirbnbCerealBook.ttf";
import "./static/fonts/AirbnbCerealExtraBold.ttf";
import "./static/fonts/AirbnbCerealLight.ttf";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
