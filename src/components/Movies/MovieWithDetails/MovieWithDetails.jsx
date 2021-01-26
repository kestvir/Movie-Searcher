import React, { Component, Fragment } from 'react';
import { Row, Col } from 'reactstrap';

import PageNotFound from './../../Router/Err/PageNotFound';
import MovieSearch from './../MovieSearch/MovieSearch';
import Cast from './Cast/Cast';

import './MovieWithDetails.css';

const API_KEY = process.env.REACT_APP_API_KEY;

class MovieWithDetails extends Component {
    state = {
        movieDetails: {
            title: null,
            releaseDate: null,
            posterPath: null,
            overview: null,
            rating: null,
            voteCount: null,
            genres: [],
            cast: []
        },
        err: false
    }

    componentDidMount() {
        this.lookForMovie();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.lookForMovie();
        }
    }

    lookForMovie = async () => {
        const movieId = this.props.match.params.id;

        try {
            const req = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=credits`)

            if (this.state.err) {
                this.setState({
                    err: false
                });
            }

            const res = await req.json();

            this.setState({
                movieDetails: {
                    title: res.title,
                    releaseDate: res.release_date,
                    posterPath: res.poster_path,
                    overview: res.overview,
                    rating: res.vote_average,
                    voteCount: res.vote_count,
                    genres: res.genres,
                    cast: res.credits.cast.slice(0, 6)
                }
            })
        } catch (err) {
            alert(err)
            this.setState({ err: true });
        }

    }

    render() {
        const { movieDetails } = this.state;

        let content;
        if (this.state.err) {
            content = <PageNotFound />
        } else {
            content = (
                <Fragment>
                    <MovieSearch />
                    <div className="movie-details">
                        <Row className="movie-details__content">
                            <Col md="5" lg="4" className="movie-details__movie-poster">
                                <img className="img-fluid" src={`http://image.tmdb.org/t/p/w342${movieDetails.posterPath}`} alt={`${movieDetails.title} poster`} />
                            </Col>
                            <Col md="7" lg="8" className="movie-details__movie-info">
                                <h3 style={{ marginBottom: "30px" }}>{movieDetails.title}</h3>
                                <p><span className="font-weight-bold">Release date: </span>{movieDetails.releaseDate}</p>
                                <p><span className="font-weight-bold">Rating: </span>{movieDetails.rating}</p>
                                <p><span className="font-weight-bold">Number of votes: </span>{movieDetails.voteCount}</p>
                                <p><span className="font-weight-bold">Genres: </span>{movieDetails.genres.map(genre => genre.name).join(", ")}</p>
                                <p>{movieDetails.overview}</p>
                            </Col>
                        </Row>
                    </div>
                    <Cast cast={movieDetails.cast} />
                </Fragment>
            )
        }

        return (
            <Fragment>
                {content}
            </Fragment>
        );
    }
}

export default MovieWithDetails;