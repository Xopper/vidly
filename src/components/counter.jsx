import React from "react";

const getBadgeClass = counter => {
	let bClass = "badge m-4 badge-";
	bClass += counter.value === 0 ? "warning" : "primary";
	return bClass;
};

const formatCount = ({ value: count }) => {
	return count === 0 ? "Zero" : count;
};

const Counter = props => {
	const { counter, onIncrement, onDecrement, onDelete } = props;
	return (
		<>
			<div className="row">
				<div className="col-2">
					<span className={getBadgeClass(counter)}>
						{formatCount(counter)}
					</span>
				</div>
				<div className="col">
					<div
						style={{
							height: "100%",
							display: "flex",
							alignItems: "center"
						}}
					>
						<button
							className="btn btn-dark btn-sm"
							onClick={onIncrement}
						>
							+
						</button>
						<button
							className="btn btn-info btn-sm ml-2"
							onClick={onDecrement}
							disabled={counter.value === 0}
						>
							-
						</button>
						<button
							className="btn btn-danger btn-sm ml-2"
							onClick={onDelete}
						>
							x
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Counter;
