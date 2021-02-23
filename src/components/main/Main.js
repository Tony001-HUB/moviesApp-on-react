import React, { Component } from 'react'
import Movies from '../movies/movieList'
import Preloader from '../preloader/Preloader'
import './Main.css'

export default class Main extends Component{  
    state = {
        movies: []
    }

    componentDidMount(){
        this.getMovie();
    }

    getMovie = async () =>{
        await fetch("http://www.omdbapi.com/?apikey=3df642f9&s=matrix")
            .then(response => response.json())
            .then(data => this.setState({
                movies: data.Search
            }))
    }
    
    render(){
        const{movies} = this.state;
        return(
            <main className='container content'>
            {
                movies.length ? (
                    <Movies movies={this.state.movies}/>
                ): <Preloader/>
            }
            </main>
        )
    }
    
}
