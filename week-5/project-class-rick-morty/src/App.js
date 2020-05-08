import React from 'react';
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

function App() {
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
        <Select/>
    
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

export default App;
