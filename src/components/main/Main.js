import React, { Component } from 'react'
import Movies from '../movies/movieList'
import Preloader from '../preloader/Preloader'
import Search from '../searchPanel/Search'
import './Main.css'

export default class Main extends Component{  
    state = {
        movies: []
    }

    componentDidMount(){
        this.getMovie();
    }

    getMovie = async (search = 'matrix', type = 'movie') =>{
        await fetch(`http://www.omdbapi.com/?apikey=3df642f9&s=${search}&type=${type !== "all" ? type : ''}`)
            .then(response => response.json())
            .then(data => this.setState({
                movies: data.Search
            }))
    }
    
    render(){
        const{movies} = this.state;
        return <main className='container content'>
            <Search getMovie={this.getMovie}/>
            {
                movies.length ? (
                    <Movies movies={this.state.movies}/>
                ): <Preloader/>
            }
            </main>
    }
    
}
