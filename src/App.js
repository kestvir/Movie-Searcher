import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Switch, Route } from "react-router-dom";

import LatestMovies from './components/Movies/LatestMovies/LatestMovies';
import MovieWithDetails from './components/Movies/MovieWithDetails/MovieWithDetails';
import PageNotFound from './components/Router/Err/PageNotFound';
import Nav from './components/UI/Nav/Nav';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Container>
                    <Nav />
                    <Switch>
                        <Route path='/' exact component={LatestMovies} />
                        <Route path='/movie/:id' exact component={MovieWithDetails} />
                        <Route component={PageNotFound} />
                    </Switch>
                </Container>
            </div>
        );
    }
}

export default App;
