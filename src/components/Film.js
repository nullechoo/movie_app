import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Film({ id, year, name, poster, description }) {
    const url = "https://www.kinopoisk.ru/series/" + id;
    return (
        <Link className="movie__Link" to="/movie-details" state={{
            id: id,
            year: year,
            name: name,
            poster: poster,
            description: description,
        }}>
            <div className="movie">
                <img src={poster} alt={name} title={name} />

                <div className="movie__column">
                    <h3 className="movie__title">{name}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <p className="movie__summary">{description.slice(0, 90)}...</p>
                </div>
            </div>
        </Link>
    )
}

Film.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default Film;