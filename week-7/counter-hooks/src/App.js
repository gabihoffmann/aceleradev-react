import React from 'react';

import "./styles.css"

import Counter from './components/Counter'
import ExampleWithManyStates from './components/ExampleWithManyStates';

function App() {
  return (
    <div className="App">
      <Counter />
      <ExampleWithManyStates />
    </div>
  );
}

export default App;
