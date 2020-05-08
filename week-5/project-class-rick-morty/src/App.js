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
import Loading from './components/Loading';
import {filterByStatus, filterByGender, filterByEpisode } from './utils'


import data from './data/data.json';

class App extends Component {
  //Inicia o state da aplicação - MOUNTING
  constructor(){
    super();
    this.state = {
      name: "React",
      characters: [],
      loading: false
    }
    console.log('Constructor')
  }

  //nesse momento o Componente já foi renderizado
  //
  componentDidMount(){
      console.log('didmount');
      this.setState({loading: true});
      setTimeout(() => {
        this.setState({characters: data.results, loading:false})
      },2000);
  }

  componentDidUpdate(){
    console.log('didUpdate')
  }

  /**
   * Função handleClick
   */
  handleClickStatus(event,status){
      event.preventDefault();
      let newCharacter = data.results;
      console.log(status)

      if (status !== ""){
        newCharacter = filterByStatus(data.results,status)
      }

      this.setState({characters: newCharacter});
}

handleClickGender(event, gender){
  event.preventDefault();
  let newCharacter = data.results;
  console.log(gender)

  if(gender !== ""){
    newCharacter = filterByGender(data.results,gender);
  }

  this.setState({characters: newCharacter});

}

handleChange(value){
  console.log(value)
  const episodes = filterByEpisode(data.results, value);
  console.log(episodes)
  this.setState({
    characters: episodes
  })
  
}

  render(){
    console.log('Renderizar', this.state.name)
    return (
      <div className="App">
        <Container>
        <FormGroup>
          <Label label="Status"/>
            
          <div>
            <Button name="Todos"
                    handleClick={event => this.handleClickStatus(event, "")}/>
            <Button name="Vivo"
                    handleClick={event => this.handleClickStatus(event, 'Alive')}/>
            <Button name="Morto"
                    handleClick={event => this.handleClickStatus(event, 'Dead')}/>
            <Button name="Desconhecido"
                    handleClick={event => this.handleClickStatus(event, 'unknown')}/>
          </div>
        </FormGroup>

        <FormGroup>
          <Label label="Sexo"/>
            
          <div> 
            <Button name="Todos"
                    handleClick={event => this.handleClickGender(event,"")}/>
            <Button name="Homen"
                    handleClick={event => this.handleClickGender(event,"Male")}/>
            <Button name="Mulher"
                      handleClick={event => this.handleClickGender(event, "Female")}/>
            <Button name="Desconhecido"
                      handleClick={event => this.handleClickGender(event,"unknown")}/>
          </div>
        </FormGroup>

        <FormGroup> 
          <Label label="Episódio"/>
          <Select options={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]}
                  handleChange={value => this.handleChange(value)}/>
        </FormGroup>

        {this.state.loading ? <Loading /> : null}

        <section>
          {this.state.characters.map((character) => {
            return(
            <Card key={character.id}>
              <CardImg alt={character.name} image={character.image}/>
              <CardBody>
                <CardTitle title={character.name}/>
                <CardText text={`Situação: ${character.status}`}/>
                <CardText text={`Sexo: ${character.gender}`}/>
              </CardBody>
            </Card>
            )
          }
          )}
         
        </section>

        </Container>

        
      </div>
    );
  }
}

export default App;
