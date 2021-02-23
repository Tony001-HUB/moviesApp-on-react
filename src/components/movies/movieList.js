import React from 'react';
import Movie from './movie'
import './movies.css'

function Movies(props) {
    const{movies = []} = props;
   
    return <div className="movies">
    {movies.length ? movies.map((movie) => ( 
     <Movie key={movie.imdbID} {...movie}/>
    )) : <h1>No movies found</h1>}
    </div>;
}

export default Movies;