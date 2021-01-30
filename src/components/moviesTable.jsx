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
	return (
		<>
			<br></br>
			<table className="table">
				<thead>
					<tr>
						{tableHead.map((row, i) => (
							<th
								key={row + i}
								onClick={row && (() => onSort())}
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
