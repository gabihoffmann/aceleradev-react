import React, { Component } from 'react';

import './styles.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      status: "",
      gender: "",
      image: ""
    };
  }

  handleChangeName = event => {
      this.setState({name: event.target.value})
  }

  handleChangeStatus = event => {
    this.setState({status : event.target.value})
  }

  handleChangeGender = event => {
    this.setState({gender: event.target.value})
  }

  handleChangeImage = event => {
    const image = URL.createObjectURL(event.target.files[0])
    this.setState({image})
  }

  render(){
    return (
      <div className="App">
        <form>
                <div className="form-group">
                    <label className="form-label">Nome</label>
                    <input 
                        type="text"
                        className="form-control"
                        value={this.state.name}
                        onChange={this.handleChangeName}/>
                </div>
                <div className="form-group">
                    <label className="form-label">Status</label>
                    <select className="form-control"
                        value={this.state.status}
                        onChange={this.handleChangeStatus} >
                        <option value=""/>
                        <option value="Alive">Vivo</option>
                        <option value="Dead">Morto</option>
                        <option value="unknown">Desconhecido</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label">Gênero</label>
                    <select className="form-control" 
                         value={this.state.gender}
                         onChange={this.handleChangeGender}>
                        <option value=""/>
                        <option value="Male">Macho</option>
                        <option value="Female">Fêmea</option>
                        <option value="unknown">Desconhecido</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-labe">Imagem</label>
                    <input 
                        type="file" 
                        className="form-contrl"
                        onChange={this.handleChangeImage}/>
                </div>
            </form>

            <div>
                <h1>Novo Personagem</h1>
                <div>Nome: {this.state.name}</div>
                <div>Status: {this.state.status}</div>
                <div>Gênero: {this.state.gender}</div>
                <div>Imagem:
                  {this.state.image && (
                    <img src={this.state.image} alt={this.state.name} className="image-preview"/>
                  )}

                </div>
            </div>
      </div>
    );
  }
}

export default App;
