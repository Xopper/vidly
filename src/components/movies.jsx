import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
	state = {
		movies: getMovies(),
		tableHead: ["Title", "Genre", "Stock", "Rate", ""]
	};

	handleDelete = movie => {
		this.setState({
			movies: this.state.movies.filter(elem => {
				return elem._id !== movie._id;
			})
		});
	};

	render() {
		const { length: count } = this.state.movies;

		if (count !== 0) {
			return (
				<>
					<main className="container">
						<div
							style={{
								marginTop: "20px",
								fontSize: "18px",
								fontWeight: "bold",
								display: "flex",
								alignItems: "center",
								justifyContent: "center"
							}}
						>
							There is
							<h5
								style={{
									fontSize: "18px",
									fontWeight: "bolder",
									color: "crimson",
									paddingLeft: 4,
									paddingRight: 4,
									margin: 0
								}}
							>
								{count}
							</h5>
							{count > 1 ? "movies" : "movie"} in Database
						</div>
						<br></br>
						<table className="table">
							<thead>
								<tr>
									{this.state.tableHead.map(row => (
										<th key={row} scope="col">
											{row}
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{this.state.movies.map(movie => (
									<tr key={movie._id}>
										<td>{movie.title}</td>
										<td>{movie.genre.name}</td>
										<td>{movie.numberInStock}</td>
										<td>{movie.dailyRentalRate}</td>
										<td>
											<button
												onClick={() => {
													this.handleDelete(movie);
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
					</main>
				</>
			);
		}
		return (
			<>
				<main className="container">
					<div
						style={{
							marginTop: "20px",
							fontSize: "18px",
							fontWeight: "bold",
							display: "flex",
							alignItems: "center",
							justifyContent: "center"
						}}
					>
						There is no movies!
					</div>
				</main>
			</>
		);
	}
}

export default Movies;
