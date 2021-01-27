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

	handleDecrement = counter => {
		this.setState({ value: value - 1 });
	};

	handleIncrement = () => {
		this.setState({ value: this.state.value + 1 });
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
				{this.state.counters.map((counter, index) => (
					<Counter
						onDelete={() => this.handleDelete(counter.id)}
						onIncrement={() => this.handleIncrement(index, counter)}
						onDecrement={() => this.handleDecrement(index, counter)}
						key={counter.id}
						counter={counter}
					/>
				))}
			</>
		);
	}
}

export default Counters;
