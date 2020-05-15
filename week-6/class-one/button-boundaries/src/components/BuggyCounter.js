import React, { Component } from 'react'

export default class BuggyCounter extends Component{
    constructor(props){
        super(props)
        this.state = {counter : 0}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.setState(({counter})=> ({
            counter: counter + 1
        }))
    }

    render(){
        if(this.state.counter === 5){
            //lançar o erro
            throw new Error('Crashed');
        }

    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>
    }
}