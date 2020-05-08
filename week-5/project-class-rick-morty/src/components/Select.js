import React, { Component } from 'react'
import './styles/select.css'

export default class Select extends Component{

    componentWillUnmount(){
        console.log('willUnmount')
    }

    render(){
        return(
            <select className="select">
                <option>oprtion 1</option>
                <option>oprtion 2</option>
                <option>oprtion 3</option>
            </select>
    )}
}