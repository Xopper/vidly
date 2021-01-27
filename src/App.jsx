import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
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

	handleIncrement = (counter, index) => {
		const counters = [...this.state.counters];
		counters[index] = { ...counter };
		counters[index].value++;
		this.setState({ counters });
	};

	handleDecrement = (counter, index) => {
		const counters = [...this.state.counters];
		counters[index] = { ...counter };
		counters[index].value--;
		this.setState({ counters });
	};

	render() {
		return (
			<>
				<Navbar
					totalCounters={
						this.state.counters.filter(c => c.value > 0).length
					}
				/>
				<main className="container">
					<Counters
						onReset={this.handleReset}
						onDelete={this.handleDelete}
						onIncrement={this.handleIncrement}
						onDecrement={this.handleDecrement}
						counters={this.state.counters}
					/>
				</main>
			</>
		);
	}
}

export default App;
