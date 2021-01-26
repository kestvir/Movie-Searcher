import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import './PageNotFound.css';

const PageNotFound = () => {

    return (
        <div className="error">
            <div className="error__error-code" style={{ marginBottom: "10px" }}>404</div>
            <h3 className="font-bold">We couldn't find the page..</h3>

            <div className="error__error-desc">
                Sorry, but the page you are looking for does not exist. <br />
                Try refreshing the page or click the button below to go back to the Homepage.
            <div>
                    <Link to={'/'}>
                        <Button className="error__errorGoHomeButton" style={{ marginTop: "20px" }}>Back to Homepage</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;