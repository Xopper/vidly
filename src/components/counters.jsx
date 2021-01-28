import React from "react";
import Counter from "./counter";

const Counters = props => {
	const { onReset, counters, onDelete, onIncrement, onDecrement } = props;
	return (
		<>
			<button onClick={onReset} className="btn btn-primary btn-sm m-3">
				Reset
			</button>
			<br></br>
			{counters.map((counter, index) => (
				<Counter
					onDelete={() => onDelete(counter.id)}
					onIncrement={() => onIncrement(counter, index)}
					onDecrement={() => onDecrement(counter, index)}
					key={counter.id}
					counter={counter}
				/>
			))}
		</>
	);
};

export default Counters;
