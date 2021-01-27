import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
	state = {
		counters: [
			{ id: 1, value: 4 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 }
		]
	};
	handleDelete = counterID => {
		const counters = this.state.counters.filter(c => c.id !== counterID);
		this.setState({ counters: counters });
	};
	handleReset = () => {
		const counters = this.state.counters.map(counter => {
			counter.value = 0;
			return counter;
		});
		this.setState({ counters });
	};

	render() {
		return (
			<>
				<button
					onClick={this.handleReset}
					className="btn btn-primary btn-sm m-3"
				>
					Reset
				</button>
				<br></br>
				{this.state.counters.map(counter => (
					<Counter
						onDelete={() => this.handleDelete(counter.id)}
						key={counter.id}
						counter={counter}
					/>
				))}
			</>
		);
	}
}

export default Counters;
