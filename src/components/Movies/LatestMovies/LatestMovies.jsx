import React, { Component, Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import MovieSearch from './../MovieSearch/MovieSearch';

import './LatestMovies.css';


const API_KEY = process.env.REACT_APP_API_KEY;


class LatestMovies extends Component {
    state = {
        movies: []
    }

    componentDidMount = async () => {

        try {
            const req = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`);
            const res = await req.json();
            this.setState({ movies: res.results });

        } catch (err) {
            alert(err)
        }

    }

    render() {
        const movieList = this.state.movies.map(movie => {
            return (
                <Col key={movie.id} md="6" lg="3" style={{ marginBottom: "30px" }}>
                    <Link to={`/movie/${movie.id}`}>
                        <div className="latest-movies__movie">
                            <img className="img-fluid" src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={`${this.state.movies.title} poster`} />
                            <div className="latest-movies__movie-info">
                                <h5>{movie.title}</h5>
                                <p style={{ marginTop: "10px" }}>Realease date: {movie.release_date}</p>
                            </div>
                        </div>
                    </Link>
                </Col>
            )
        });

        return (
            <Fragment>
                <MovieSearch />
                <div className="latest-movies">
                    <h3 className="latest-movies__section-title">Currently in cinemas</h3>
                    <Row>
                        {movieList}
                    </Row>
                </div>
            </Fragment>
        )
    }
}

export default LatestMovies;