import React, { useState } from 'react';
import './Dice.css';

function Dice() {
  
   const [diceResult, setDiceResult] = useState(1);
  

  const diceImage = require(`../../images/${diceResult}.png`);
 

  function rollDice() {
    setDiceResult(Math.floor(Math.random() * 4) + 1);
    
  }

  return (
   
    <div className="dice-box">
        <img src={diceImage} className="dice" alt="imagen de un dado" />          
        <button className="button" onClick={rollDice}>Lanzar</button>
    </div>

  );
}

export default Dice;