import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
	render() {
		return (
			<>
				<Counter></Counter>
				<br></br>
				<Counter></Counter>
			</>
		);
	}
}

export default Counters;
