import React, { Component } from "react";


export default class Search extends Component{

    state = {
        searchVal:''
    }

    handleOnChange = (event) => {
        this.setState({
            searchVal: event.target.value
        })
        console.log(this.state.searchVal);
    }

    onKeyDown = (event) => {
        if(event.key === 'Enter'){
            this.props.getMovie(this.state.searchVal)
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
                    onClick = {() => this.props.getMovie(this.state.searchVal)}
                    >
                    <i className="material-icons right">Search</i>
                    </button>
                    </div>
                </div>
            </div>
            </>
        )
    }
}