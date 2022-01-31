import React, { useState } from 'react';
import './Dice.css';

function Dice({ diceResult, rollDice }) {
  
  const diceImage = require(`../../images/${diceResult}.png`);
 
  return (
   
    <div className="dice-box">
        <img src={diceImage} className="dice" alt="imagen de un dado" />          
        <button className="button" onClick={rollDice}>Lanzar</button>
    </div>

  );
}

export default Dice;