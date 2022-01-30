import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import StartScreen from "../pages/Game/StartScreen";
import GameScreen from "../pages/Game/GameScreen"
import HomePage from "../pages/HomePage/HomePage";
import Pieces from "../pages/Pieces/Pieces";
import Rules from "../pages/Rules/Rules";


const IndexRoutes = () => {

  const [stateGame, setStateGame] = useState(0)
  

  const changeStateGame = ( value ) =>{
    setStateGame(value)
  
}

  return (
      <>
        <Routes>
          <Route exact path="/" element ={<HomePage />} />
          <Route exact path="/rules" element ={<Rules />} />
          <Route exact path="/pieces" element ={<Pieces />} />
          <Route exact path="/game" element ={ stateGame === 0 ? <StartScreen setStart={changeStateGame}/> : <GameScreen/> } />
        </Routes>
      </>    
  );
};

export default IndexRoutes;