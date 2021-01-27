import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
	render() {
		return (
			<>
				<button
					onClick={this.props.onReset}
					className="btn btn-primary btn-sm m-3"
				>
					Reset
				</button>
				<br></br>
				{this.props.counters.map((counter, index) => (
					<Counter
						onDelete={() => this.props.onDelete(counter.id)}
						onIncrement={() =>
							this.props.onIncrement(counter, index)
						}
						onDecrement={() =>
							this.props.onDecrement(counter, index)
						}
						key={counter.id}
						counter={counter}
					/>
				))}
			</>
		);
	}
}

export default Counters;
