import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import './Movie.css'

function Movie({ id, year, title, summary, poster, genres }) {
    return (
        <Link
        to = {{
            pathname : '/movie-detail',
            state : {
                year,
                title,
                summary,
                poster,
                genres
            }
        }}>
            <div className='movie'>
                <img src={poster} alt={title} title={title}></img>
                <div className='movie__data'>
                    <h3 className="movie__title">{title}</h3>
                    <h5 className='movie__year'>{year}</h5>
                    <ul className='movie__genres'>{genres.map((genre, index) => <li key={index} className='genres__genre'>{genre}</li>)}</ul>
                    <p className='movie__summary'>{summary.slice(0, 180)}...</p>
                </div>

            </div>
        </Link>
    )
        ;

}

Movie.propTypes = {
    id: Proptypes.number.isRequired,
    year: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired,
    summary: Proptypes.string.isRequired,
    poster: Proptypes.string.isRequired,
};

export default Movie;