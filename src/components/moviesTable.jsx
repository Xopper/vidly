import React, { Component } from "react";
import TableHead from "./common/tableHead";
import TableBody from "./common/tableBody";

class MoviesTable extends Component {
	columns = [
		{ label: "Title", path: "title" },
		{ label: "Genre", path: "genre.name" },
		{ label: "Stock", path: "numberInStock" },
		{ label: "Rate", path: "dailyRentalRate" },
		{},
		{}
	];

	render() {
		const {
			items: movies,
			onLike,
			onDelete,
			onSort,
			sortColumn
		} = this.props;

		return (
			<>
				<br></br>
				<table className="table">
					<TableHead
						columns={this.columns}
						sortColumn={sortColumn}
						onSort={onSort}
					/>
					<TableBody
						data={movies}
						onLike={onLike}
						onDelete={onDelete}
					/>
				</table>
			</>
		);
	}
}

export default MoviesTable;
