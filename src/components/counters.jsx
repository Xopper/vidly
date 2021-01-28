import React from "react";
import Counter from "./counter";

const Counters = props => {
	return (
		<>
			<button
				onClick={props.onReset}
				className="btn btn-primary btn-sm m-3"
			>
				Reset
			</button>
			<br></br>
			{props.counters.map((counter, index) => (
				<Counter
					onDelete={() => props.onDelete(counter.id)}
					onIncrement={() => props.onIncrement(counter, index)}
					onDecrement={() => props.onDecrement(counter, index)}
					key={counter.id}
					counter={counter}
				/>
			))}
		</>
	);
};

export default Counters;
