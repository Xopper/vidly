import React, { Component } from "react";
import Like from "./like";

class TableBody extends Component {
	render() {
		const { data: movies, onDelete, onLike } = this.props;
		return (
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
		);
	}
}

export default TableBody;
