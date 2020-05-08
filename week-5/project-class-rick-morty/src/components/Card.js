import React from 'react'
import "./styles/card.css"

export function CardImg(props){
    return (<img
         src={props.image} 
         alt={props.alt} 
         className="card-img"/>)
}

export function CardBody(props){
    return (<div 
        className="card-body">
            {props.children}
        </div>)
}

export function CardTitle(props){
    return(
        <h5 className="card-title">
            {props.title}
        </h5>
    )
}

export function CardText(props){
    return(
        <p className="card-text">
            {props.text}
        </p>
    )
}

export function Card(props){
    return(
        <div className="card">
            {props.children}
        </div>
    )
}
