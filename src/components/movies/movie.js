import React from 'react';
import './movies.css'

function Movie(props) {
    const {Title, Year, Type, Poster} = props;

    return <div className="movie card"> 
            <div className="card">
                <div className="card-image">
                {
                    (Poster === 'N/A') ? <img src="https://via.placeholder.com/468x670?text=Visit+Blogging.com+Now" alt="error"/> : <img src={Poster} alt="error"/>
                }
                <span className="card-title">{`${Title}: ${Year}`}</span>
                </div>
                <div className="card-content">
                <p>{`Type: ${Type}`}</p>
                </div>
                <div className="card-action">
                <a href="http://localhost:3000/">This is a link</a>
                </div>
        </div>
    </div>;
}

export default Movie;
