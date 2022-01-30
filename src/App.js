import React, { useState } from "react";
import './App.css';
import Navigation from './components/layaout/Navigation/Navigation';
import IndexRoutes from './components/routes/index';


function App() {

  const [stateGame, setStateGame] = useState(0)

 
  return (
    <div className="App">
      <Navigation /> 
      <IndexRoutes />
    </div>      
  );
};

export default App;
