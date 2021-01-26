import React from 'react';
import { Row, Col } from 'reactstrap';

import './Cast.css';

const Cast = ({ cast }) => {
    let title;
    let content;
    if (cast.length === 0) {
        title = null;
        content = null;
    } else {
        title = <h3 className="cast__section-title">Cast</h3>;

        content = (
            cast.map(member => {
                let photoSrc;
                member.profile_path
                    ? photoSrc = `https://image.tmdb.org/t/p/w185${member.profile_path}`
                    : photoSrc = `http://via.placeholder.com/185x278`;

                return (
                    <Col key={member.credit_id} sm="4" md="2">
                        <img className="cast__cast-img img-fluid rounded" src={photoSrc} alt={`${member.name}`} />
                        <p className="cast__cast-name text-center">{member.name}</p>
                    </Col>
                )
            })
        )
    }

    return (
        <div className="cast">
            {title}
            <Row>
                {content}
            </Row>
        </div>
    )
}

export default Cast;