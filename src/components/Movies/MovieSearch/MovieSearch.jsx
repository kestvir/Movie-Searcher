import React, { Component } from 'react';
import SearchResults from './../SearchResults/SearchResults';
import onClickOutside from 'react-onclickoutside';

import './MovieSearch.css';


const API_KEY = process.env.REACT_APP_API_KEY;

class MoviesSearch extends Component {
    state = {
        foundMovies: [],
        isVisible: false
    }

    handleSearchChange = async (e) => {
        const searchVal = e.target.value;

        if (!searchVal) {
            this.setState({
                foundMovies: [],
                isVisible: false
            });
            return;
        }

        try {
            const req = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchVal}&page=1&include_adult=false`)

            const res = await req.json();

            this.setState({
                foundMovies: res.results,
                isVisible: true
            })
        } catch (err) {
            alert(err)
        }

    }

    closeFoundMovies = () => {
        this.refs.movieTitle.value = '';
        this.setState({ isVisible: false });
    }

    ifMoviesFoundShow = () => {
        if (this.state.foundMovies.length > 0) {
            this.setState({ isVisible: true });
        }
    }

    handleClickOutside = e => {
        if (this.state.isVisible === true && e.target.className !== "movie-search__input") {
            this.setState({ isVisible: false });
        }
    }


    render() {
        return (
            <div className="movie-search">
                <input onClick={this.ifMoviesFoundShow} className="movie-search__input"
                    ref="movieTitle"
                    onChange={this.handleSearchChange}
                    type="text"
                    name="name"
                    id="nme" required autoComplete="off" />
                <label className="movie-search__label" htmlFor="nme">
                    <span className="movie-search__question-text">What movie are you looking for?</span>
                </label>
                <SearchResults
                    closeFoundMovies={this.closeFoundMovies}
                    isVisible={this.state.isVisible}
                    movies={this.state.foundMovies} />
            </div>
        )
    }
}

export default onClickOutside(MoviesSearch);

