import React, { Component } from 'react'
import ReactDOM from 'react-dom'

function tick(){
  const element = (
    <div>
      <h1>Hello</h1>
  <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );

  ReactDOM.render(
    element,document.getElementById('root')
  )

}

//Criando um componente com function
function Welcome(props){
return <h1>Hello, {props.name}</h1>
}

//Criando um componente com Class
class WelcomeOne extends Component{
  render(){
    return(
    <h1>Hello, {this.props.name}</h1>
    )
  }
}
/**
 * Os dois componentes acima são equivalentes do ponto de vista do React.
 */

const element = <Welcome name="Gabi"/>
ReactDOM.render(
  <Welcome name="name"/>,
  document.getElementById('root')
);

//setInterval(tick, 2000)