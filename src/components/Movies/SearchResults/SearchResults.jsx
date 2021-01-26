import React from 'react';
import { Link } from 'react-router-dom';

import './SearchResults.css';

const SearchResults = ({ movies, isVisible, closeFoundMovies }) => {
    let foundMovies;
    let imgSrc;

    if (movies.length === 0) {
        foundMovies = null;
    } else {
        foundMovies = movies.map(movie => {
            movie.poster_path ? imgSrc = `http://image.tmdb.org/t/p/w154${movie.poster_path}`
                : imgSrc = `http://via.placeholder.com/154x231`;

            return (
                <div className="search-results__movie-item" key={movie.id}>
                    <Link onClick={closeFoundMovies} className="search-results__movie-link" to={`/movie/${movie.id}`}>
                        <div className="search-results__movie" >
                            <img className="img-fluid" src={imgSrc} alt={`${movie.title} poster`} />
                            <div className="search-results__movie-info">
                                <p className="font-weight-bold">{movie.title}</p>
                                <p className="font-weight-bold">{movie.release_date}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        })
    }

    return (
        <div className={`search-results ${isVisible ? "visible" : "invisible"}`}>
            {foundMovies}
        </div>
    )

}


export default SearchResults;
