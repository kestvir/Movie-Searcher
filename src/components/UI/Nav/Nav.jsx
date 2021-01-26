import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

const Logo = () => {
    return (
        <div className="nav" style={{ marginTop: "20px" }}>
            <Link className="nav__logoLink" to={"/"}>
                <div className="nav__logo">
                    <i className="nav__app-logo-icon fa fa-video-camera" aria-hidden="true"></i>
                    <span className="nav__app-title">MovieSearcher</span>
                </div>
            </Link>

            <a className="nav__apiLink" href={"https://www.themoviedb.org/documentation/api"} target="_blank">
                <div className="nav__poweredBy">Powered By The Movie Database API</div>
            </a>
        </div>
    )
}

export default Logo;