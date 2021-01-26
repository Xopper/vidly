import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
// import Counter from "./components/counter";
import Movies from "./components/movies";

// const Elem = <h1>Todos</h1>;
ReactDom.render(<Movies />, document.querySelector("#root"));
