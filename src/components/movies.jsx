import React, { Component } from "react";
import Like from "./common/like";
import { getMovies } from "../services/fakeMovieService";
import Pagination, { getcurrentPage } from "./common/pagination";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "./common/listGroup";

class Movies extends Component {
	state = {
		movies: [],
		genres: [],
		tableHead: ["Title", "Genre", "Stock", "Rate", "", ""],
		pageSize: 4,
		currentPage: 1
	};

	componentDidMount() {
		const genres = [{ name: "All Genres" }, ...getGenres()];
		this.setState({
			movies: getMovies(),
			genres
		});
	}

	handleDelete = movie => {
		this.setState({
			movies: this.state.movies.filter(elem => {
				return elem._id !== movie._id;
			})
		});
		this.setState({
			currentPage: getcurrentPage(
				this.state.movies.length - 0x1,
				this.state.pageSize,
				this.state.currentPage
			)
		});
	};

	handleLike = movie => {
		/**
		 * this is a second way to do cloning
		 * and updating state
		 */

		// foo ^= ture; => toggling the value if its true make it false , Nate that it returns 0 or 1
		const movies = [...this.state.movies];
		const index = movies.indexOf(movie);
		movies[index] = { ...movies[index] };
		movies[index].liked ^= true;
		this.setState({ movies });
	};

	handlePageChange = page => {
		this.setState({ currentPage: page });
	};

	handleItemSelect = genre => {
		this.setState({
			selectedItem: genre,
			currentPage: 1
		});
	};

	render() {
		const { length: count } = this.state.movies;

		const {
			pageSize,
			currentPage,
			tableHead,
			movies: allMovies,
			selectedItem
		} = this.state;

		const filtred =
			selectedItem && selectedItem._id
				? allMovies.filter(m => m.genre._id === selectedItem._id)
				: allMovies;

		const movies = paginate(filtred, currentPage, pageSize);

		if (count !== 0) {
			return (
				<main className="container mt-5">
					<div className="row">
						<div className="col-3">
							<ListGroup
								items={this.state.genres}
								selectedItem={this.state.selectedItem}
								onItemSelect={this.handleItemSelect}
							/>
						</div>
						<div className="col">
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
									{filtred.length}
								</h5>
								{filtred.length > 1 ? "movies" : "movie"} in
								Database
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
														this.handleDelete(
															movie
														);
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
								itemsCount={filtred.length}
								pageSize={pageSize}
								currentPage={currentPage}
								onPageChange={this.handlePageChange}
							/>
						</div>
					</div>
				</main>
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
