import React, { Component } from 'react'
import Movies from '../movies/movieList'
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
        console.log(this.state.movies)
        return(
            <main className='container content'>
            <Movies movies={this.state.movies}/>
            </main>
        )
    }
    
}
