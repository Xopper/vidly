import React from "react";

const getBadgeClass = counter => {
	let bClass = "badge m-4 badge-";
	bClass += counter.value === 0 ? "warning" : "primary";
	return bClass;
};

const formatCount = counter => {
	const { value: count } = counter;
	return count === 0 ? "Zero" : count;
};

const Counter = props => {
	const { counter, onIncrement, onDecrement, onDelete } = props;
	return (
		<>
			<span className={getBadgeClass(counter)}>
				{formatCount(counter)}
			</span>
			<button className="btn btn-dark btn-sm" onClick={onIncrement}>
				Increase
			</button>
			<button
				className="btn btn-info btn-sm ml-2"
				onClick={onDecrement}
				disabled={counter.value === 0}
			>
				Decrease
			</button>
			<button className="btn btn-danger btn-sm ml-2" onClick={onDelete}>
				Delete
			</button>
			<br></br>
		</>
	);
};

export default Counter;
