import React, { Component } from 'react';
import './App.css';

import Button from './components/Button'
import Label from './components/Label'
import Container from './components/Container';
import FormGroup from './components/FormGroup';
import Select from './components/Select'
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle
} from './components/Card';

class App extends Component {
  //Inicia o state da aplicação - MOUNTING
  constructor(){
    super();
    this.state = {
      name: "React"
    }
    console.log('Constructor')
  }

  //nesse momento o Componente já foi renderizado
  //
  componentDidMount(){
      console.log('didmount')
      setTimeout(() => {
        this.setState({name: 'javascript', hide: true})
      });
  }

  componentDidUpdate(){
    console.log('didUpdate')
  }

  render(){
    console.log('Renderizar', this.state.name)
    return (
      <div className="App">
        <Container>
        <FormGroup>
          <Label label="Status"/>
            
          <div>
          <Button name="Todos"/>
            <Button name="Vivo"/>
            <Button name="Morto"/>
            <Button name="Desconhecido"/>
          </div>
        </FormGroup>

        <FormGroup>
          <Label label="Sexo"/>
            
          <div>
            <Button name="Todos"/>
            <Button name="Homen"/>
            <Button name="Mulher"/>
            <Button name="Desconhecido"/>
          </div>
        </FormGroup>

        <FormGroup> 
          <Label label="Episódio"/>
          {this.state.hide ? null :<Select/>}
        </FormGroup>


        <section>
          <Card>
              <CardImg alt="Title Image"/>
              <CardBody>
                <CardTitle title="exemplo"/>
                <CardText text="texto"/>
              </CardBody>
            </Card>
        </section>

        </Container>

        
      </div>
    );
  }
}

export default App;
