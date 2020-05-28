import React, { Component } from 'react';
import './App.css';


import Infos from './components/Info';
import ReposList from './components/ReposList';
import StarredList from './components/StarredList';


class App extends Component {
  state = {
    infoData: false,
    repoData: false,
    starredData: false
  }

  componentDidMount(){
    setTimeout(()=> this.setState({infoData: true}), 1000);
    setTimeout(()=> this.setState({repoData: true}), 1500);
    setTimeout(()=> this.setState({starredData: true}), 2000);
  }
  render(){
    const {infoData, repoData, starredData} = this.state;
    return (
      <div className="App">
        <Infos data={infoData} />
        <ReposList data={repoData} />
        <StarredList data={starredData} />
      </div>
  );
  }
}

export default App;
