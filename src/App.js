import React from 'react';
import Contador from './Components/Contador';
import Header from './Components/Header';
import Characters from './Components/Characters';
import List from './Components/List';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hola Mundo</h1>
      <Contador/>
      <Header/> 
      <Characters />
      <List />
    </div>
  );
}

export default App;
