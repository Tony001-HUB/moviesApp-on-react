import React, { Component } from 'react'

export default class Form extends Component{

    state = {
        valPass: '',
        valGmail: ''
    }

    handlOnChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }


    render() {
        const {valPass, valGmail} = this.state;
        return (
        <>
            <input 
            name = "valPass"
            type='text'
            value = {valPass}
            onChange = {this.handlOnChange}
            />
            <input 
            name = "valGmail"
            type='text'
            value = {valGmail}
            onChange = {this.handlOnChange}
            />
        </>
        )
    }
}