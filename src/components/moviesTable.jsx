import React, { Component } from "react";
import TableHead from "./common/tableHead";
import TableBody from "./common/tableBody";
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
						columns={this.columns}
						onLike={onLike}
						onDelete={onDelete}
					/>
				</table>
			</>
		);
	}
}

export default MoviesTable;
