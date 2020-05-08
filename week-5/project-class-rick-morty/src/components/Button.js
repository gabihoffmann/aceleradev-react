import React from 'react'
import './styles/button.css'

function Button(props){
    return (
        <button
        className="btn btn-secondary"
        onClick={props.handleClick}>
            {props.name}
        </button>
    );
}

export default Button;