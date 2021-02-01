import React, { Component } from "react";
import Like from "./common/like";

class MoviesTable extends Component {
	raiseSort = path => {
		let sortColumn = { ...this.props.sortColumn };
		if (sortColumn.path === path)
			sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
		else sortColumn = { path, order: "asc" };
		this.props.onSort(sortColumn);
	};
	render() {
		const {
			items: movies,
			itemsTable: tableHead,
			onLike,
			onDelete
		} = this.props;

		const tableKeys = Array.from(tableHead.keys());

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
									onClick={() =>
										row && this.raiseSort(tableValues[i])
									}
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
	}
}

export default MoviesTable;
