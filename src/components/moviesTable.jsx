import React, { Component } from "react";
import Table from "./common/table";
import Like from "./common/like";

class MoviesTable extends Component {
	columns = [
		{ label: "Title", path: "title" },
		{ label: "Genre", path: "genre.name" },
		{ label: "Stock", path: "numberInStock" },
		{ label: "Rate", path: "dailyRentalRate" },
		{
			content: movie => (
				<Like
					onLike={() => {
						this.props.onLike(movie);
					}}
					liked={movie.liked}
				/>
			)
		},
		{
			content: movie => (
				<button
					onClick={() => {
						this.props.onDelete(movie);
					}}
					className="btn btn-danger btn-sm"
				>
					Delete
				</button>
			)
		}
	];

	render() {
		const { items: movies, onSort, sortColumn } = this.props;

		return (
			<>
				<br></br>
				<Table
					columns={this.columns}
					sortColumn={sortColumn}
					onSort={onSort}
					data={movies}
				/>
			</>
		);
	}
}

export default MoviesTable;
