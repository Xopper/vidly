import React, { Component } from "react";
import Like from "./common/like";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class Movies extends Component {
	state = {
		movies: getMovies(),
		tableHead: ["Title", "Genre", "Stock", "Rate", "", ""],
		pageSize: 4,
		currentPage: 1
	};

	handleDelete = movie => {
		this.setState({
			movies: this.state.movies.filter(elem => {
				return elem._id !== movie._id;
			})
		});
	};

	handleLike = movie => {
		/**
		 * this is a second way to do cloning
		 * and updating state
		 */

		// foo ^= ture; => toggling  if its true make it false , Nate that it returns 0 or 1
		const movies = [...this.state.movies];
		const index = movies.indexOf(movie);
		movies[index] = { ...movies[index] };
		movies[index].liked ^= true;
		this.setState({ movies });
	};

	handlePageChange = page => {
		this.setState({ currentPage: page });
	};

	render() {
		const { length: count } = this.state.movies;
		const {
			pageSize,
			currentPage,
			tableHead,
			movies: allMovies
		} = this.state;
		const movies = paginate(allMovies, currentPage, pageSize);

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
									{tableHead.map((row, i) => (
										<th key={row + i} scope="col">
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
													this.handleLike(movie);
												}}
												liked={movie.liked}
											/>
										</td>
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
						<Pagination
							itemsCount={count}
							pageSize={pageSize}
							currentPage={currentPage}
							onPageChange={this.handlePageChange}
						/>
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
