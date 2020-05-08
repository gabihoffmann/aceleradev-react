import React from 'react'
import './styles/button.css'

function Button(props){
    return (
        <button
        className="btn btn-secondary">
            {props.name}
        </button>
    );
}

export default Button;