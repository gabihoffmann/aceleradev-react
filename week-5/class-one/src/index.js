import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Clock extends React.Component{
  //Metodos do ciclo de vida
  //O construtor é chamado uma unica vez
  constructor(props){
    super(props);
    this.state = {date: new Date()}
  }

  //é executado depois que a saida do componente é renderizado na DOM
  componentDidMount(){
    //Adicionando campos a classe Clock
      this.timerID = setInterval(
        ()=> this.tick(), 1000
      );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date: new Date()
    })
  }

  render(){
    return(
      <div>
        <h1> hello</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  };
}


ReactDOM.render(<Clock />,document.getElementById('root'));
/**
 * 1 - Quando o component Clock é passado para o render da ReactDOM,
 *    o React chama o construtor de Clock
 *    Etapa MOUNTING do ciclo
 *    Nesse momento Clock inicializa o this.state com a hora atual
 *  2 - Então o render do Clock é chamado, e o React exibe na tela e atualiza o DOM
 *    para coincidir com a renderização do Clock
 *  3 - Quando Clock é inserido na DOM, o React chama o ciclo de vida
 *  pelo metodo componentDidMount(), que dentro dele o componente Clock pede pronavegador
 * configurar um temporizador que chama tick()
 *  4 - tick() por sua vez atualiza o estado de state com setState()
 *  que terá uma nova saida para render() do Clock que atualiza a ReactDOM que atualiza a DOM
 * 
 *  5 - se o componente Clock for removido da DOM, o React chama o ciclo 
 * componentWillUnmount() para encerrar o temporizador
 * 
 * */

 /**
  * STATE
  * O estado nunca é atualizado diretamente utiliza this.setState
  * O unico lugar que atribui state é no construtor
  * 
  * A atualização do state é assincrono, para utilizar os valores do state autual para caulcular o proximo
  * passa uma função dentro de setState 
  *  this.setState((state,props)=>{
  *     counter: state.counter + props.increment
  * })
  * 
  * state pode conter varias variaves e estas podem ser atualidas independentemente
  * this.state = {
  *   post: [],
  *   comments: []
  * }
  * 
  * e e
  * 
  */

