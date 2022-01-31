import react, { useState, useEffect } from "react";
import Board from "../../Board/Board";
import Dice from "../../Dice/Dice"
import "../Game/GameScreen.css";



export default function GameScreen(){

 
  const [diceResult, setDiceResult] = useState(0);
 
  const [squares,setSquares] = useState (Array(7).fill(0));
  const [cookieSquares,setCookieSquares] = useState (Array(3).fill(0));
  const [eggSquares,setEggSquares] = useState (Array(3).fill(0));
  const [frogSquares,setFrogSquares] = useState (Array(3).fill(0));
    
 
  const rollDice = () => {
    setDiceResult(Math.floor(Math.random() * 4) + 1);
    switch (diceResult){
      case 1:
        let newCookieSquares = [...cookieSquares]
        let cookieSquareIndex = newCookieSquares.findIndex(value =>value === 0)        
        newCookieSquares.splice(cookieSquareIndex,1,'x')
        setCookieSquares(newCookieSquares)     
        break;
      case 2:
        let newEggSquares = [...eggSquares]
        let eggSquareIndex = newEggSquares.findIndex(value =>value === 0)
        newEggSquares.splice(eggSquareIndex,1,'x')
        setEggSquares(newEggSquares)
        break;
      case 3:
        let newFrogSquares = [...frogSquares]
        let frogSquareIndex = newFrogSquares.findIndex(value =>value === 0)
        newFrogSquares.splice(frogSquareIndex,1,'x')
        setFrogSquares(newFrogSquares)
        break;  
      case 4:
        let newSquares = [...squares]
        let squareIndex = newSquares.findIndex(value =>value === 0)
        newSquares.splice(squareIndex,1,'x')
        setSquares(newSquares)
        break; 
    };
  
  }

                    
  return(

    <div className="game-container">
        <Dice diceResult={ diceResult } rollDice={ rollDice }/>
        <Board squares={squares} cookieSquares={cookieSquares} eggSquares={eggSquares} frogSquares={frogSquares}/>
        {console.log (squares)}{console.log (eggSquares)} 
        {console.log ('cookie',cookieSquares)} {console.log (frogSquares)} {console.log ('index')} {console.log ('dice',diceResult)} 

    </div>
  );
}