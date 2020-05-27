import React from 'react';
import logo from './logo.svg';
import './App.css';

import Infos from './components/Info';
import ReposList from './components/ReposList';
import StarredList from './components/StarredList';


function App() {
  return (
    <div className="App">
      teste
      <Infos />
      <ReposList/>
      <StarredList />
    </div>
  );
}

export default App;
