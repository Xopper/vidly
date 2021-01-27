import React, { Component, Fragment } from "react";

class Counter extends Component {
	state = {
		count: 0,
		imageUrl: "https://picsum.photos/200",
		alternativeText: "Random Text",
		tags: ["tag1", "tag2", "tag3"]
	};

	render() {
		return (
			<Fragment>
				<span className={this.getBadgeClass()}>
					{this.formatCount()}
				</span>
				<button
					className="btn btn-dark btn-sm"
					onClick={this.handleIncrement}
				>
					Increase
				</button>
				<button
					className="btn btn-info btn-sm ml-2"
					onClick={this.handleDecrement}
					disabled={this.state.count === 0}
				>
					decrease
				</button>
			</Fragment>
		);
	}

	getBadgeClass() {
		let bClass = "badge m-4 badge-";
		bClass += this.state.count === 0 ? "warning" : "primary";
		return bClass;
	}
	handleDecrement = () => {
		this.setState({ count: this.state.count - 1 });
	};

	handleIncrement = () => {
		this.setState({ count: this.state.count + 1 });
	};

	formatCount() {
		const { count } = this.state;
		return count === 0 ? "Zero" : count;
	}
}

export default Counter;

/**
 * conditionall rendering ep 9
 */
