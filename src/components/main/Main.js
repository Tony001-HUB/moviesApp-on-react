import React, { Component } from 'react'
import Movies from '../movies/movieList'
import Preloader from '../preloader/Preloader'
import Search from '../searchPanel/Search'
import './Main.css'

export default class Main extends Component{  
    state = {
        movies: [],
        loading: true
    }

    componentDidMount(){
        this.getMovie();
    }

    getMovie = async (search = 'matrix', type = 'all') =>{
        this.setState({loading: true})
        await fetch(`https://www.omdbapi.com/?apikey=3df642f9&s=${search}&type=${type !== "all" ? type : ''}`)
            .then(response => response.json())
            .then(data => this.setState({
                movies: data.Search,
                loading: false
            }))
    }
    
    render(){
        const{movies, loading} = this.state;
        return <main className='container content'>
            <Search getMovie={this.getMovie}/>
            {
                loading ? (
                 <Preloader/> 
                ): <Movies movies={movies}/>
            }
            </main>
    }
    
}
