import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
// import App from "./App";
// import Counter from "./components/counter";
// import Counters from "./components/counters";
import Movies from "./components/movies";

ReactDom.render(<Movies />, document.querySelector("#root"));
