import React, {Component} from 'react'
import {getMovies} from "../services/fakeMovieService";

class Movies extends Component {
    state = {
        movies: getMovies()
    };

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    render() {
        /*
        * This expression takes length of the this.state.movies and give it a new name moviesCount
        * */
        const {length: moviesCount} = this.state.movies;

        if (moviesCount === 0) return <p>There are no movies in the database</p>

        return (
            <React.Fragment>
                <p>Showing {moviesCount} movies in the database</p>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
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
                                <button onClick={() => this.handleDelete(movie)}
                                        className="btn btn-danger btn-sm">Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }

    handleDelete(movie) {
        console.log(movie);
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({movies: movies})
    }
}

export default Movies;