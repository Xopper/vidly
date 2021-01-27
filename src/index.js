import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
// import Counter from "./components/counter";
import Counters from "./components/counters";
// import Movies from "./components/movies";

ReactDom.render(<Counters />, document.querySelector("#root"));
