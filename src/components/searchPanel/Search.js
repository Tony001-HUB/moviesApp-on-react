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
                    />
                    <label></label>
                    <span className="helper-text" data-error="wrong" data-success="right">Input movie name, for search</span>
                    </div>
                </div>
            </div>
            </>
        )
    }
}