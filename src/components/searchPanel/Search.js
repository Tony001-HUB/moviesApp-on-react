import React, { Component } from "react";


export default class Search extends Component{

    state = {
        searchVal:'',
        type: 'all'
    }

    componentDidUpdate(){
       console.log(this.state.type);
    }

    handleOnChange = (event) => {
        this.setState({
            searchVal: event.target.value
        })
        console.log(this.state.searchVal);
    }

    handleOnTypeFilter = (event) => {
        this.setState(() => ({type: event.target.dataset.type}), () => {
            this.props.getMovie(this.state.searchVal, this.state.type)
        });
    }

    onKeyDown = (event) => {
        if(event.key === 'Enter'){
            this.props.getMovie(this.state.searchVal, this.state.type)
        }
    }

    render(){          
        return(
            <>           
            <div className="row">
                <form className="col s12"/>
                <div className="row">
                    <div className="input-field col s12">
                    <input 
                    id="email" 
                    type="email" 
                    className="validate"
                    value = {this.state.searchVal}
                    onChange = {this.handleOnChange}
                    onKeyDown = {this.onKeyDown}
                    ></input>
                    <button 
                    className="btn waves-effect waves-light" 
                    type="submit" 
                    name="action"
                    onClick = {() => this.props.getMovie(this.state.searchVal, this.state.type)}
                    >
                    <i className="material-icons right">Search</i>
                    </button>
                    <p>
                        <label>
                        <input 
                        className="with-gap" 
                        name="type" 
                        type="radio" 
                        data-type = "all"
                        onChange={this.handleOnTypeFilter} 
                        checked = {this.state.type === 'all'}
                        />
                        <span>All</span>
                        </label>

                        <br/>
                        <label>
                        <input 
                        className="with-gap" 
                        name="type" 
                        type="radio" 
                        data-type = "movie"
                        onChange={this.handleOnTypeFilter} 
                        checked = {this.state.type === 'movie'}
                        />
                        <span>Movie</span>
                        </label>
                        <br/>

                        <label>
                        <input 
                        className="with-gap" 
                        name="type" 
                        type="radio" 
                        data-type = "series"
                        onChange={this.handleOnTypeFilter} 
                        checked = {this.state.type === 'series'}
                        />
                        <span>Series</span>
                        </label>
                        <br/>
                    </p>
                    </div>
                </div>
            </div>
            </>
        )
    }
}