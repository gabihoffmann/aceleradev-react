import React from 'react';

import "./styles.css"

import ExampleWithHook from './components/ExampleWithHook';
import ExampleWithManyStates from './components/ExampleWithManyStates';
import ExampleWithUseEffects from './components/ExampleWithUseEffects';
import ExampleWithUseEffectCleaningEffect from './components/ExampleWithUseEffectCleaningEffect'
import ExampleCustomHooks from './components/ExampleCustomHook';

function App() {

  return (
    <div className="App">
      <ExampleWithHook />
      <ExampleWithManyStates />
      <ExampleWithUseEffects />
      <ExampleWithUseEffectCleaningEffect />
      <ExampleCustomHooks/>
    </div>
  );
}

export default App;
