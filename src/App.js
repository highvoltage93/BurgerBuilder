import React from 'react';
import './App.css';
import Layaout from './Components/Layaout/Layaout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div className="App">
      <Layaout>
          <BurgerBuilder/>
      </Layaout>
    </div>
  );
}

export default App;
