import React from "react";
import Like from "./common/like";

const MoviesTable = props => {
	const {
		items: movies,
		itemsTable: tableHead,
		onLike,
		onDelete,
		onSort
	} = props;
	const tableKeys = Array.from(tableHead.keys());
	console.log(tableKeys);
	const tableValues = Array.from(tableHead.values());
	return (
		<>

			<br></br>
			<table className="table">
				<thead>
					<tr>
						{tableKeys.map((row, i) => (
							<th
								key={i}
								onClick={() => (row && onSort(tableValues[i]))}
								scope="col"
							>
								{row}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{movies.map(movie => (
						<tr key={movie._id}>
							<td>{movie.title}</td>
							<td>{movie.genre.name}</td>
							<td>{movie.numberInStock}</td>
							<td>{movie.dailyRentalRate}</td>
							<td>
								<Like
									onLike={() => {
										onLike(movie);
									}}
									liked={movie.liked}
								/>
							</td>
							<td>
								<button
									onClick={() => {
										onDelete(movie);
									}}
									className="btn btn-danger btn-sm"
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default MoviesTable;
