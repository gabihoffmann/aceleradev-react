import React from 'react'
import './styles/container.css'

function Container(props){
return <div className="container">{props.children}</div>
}

export default Container