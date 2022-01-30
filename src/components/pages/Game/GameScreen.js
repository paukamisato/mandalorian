import react, { useState } from "react";
import Board from "../../Board/Board";
import Dice from "../../Dice/Dice"
import "../Game/GameScreen.css";


export default function GameScreen(){

  const [turn, setTurn] = useState(); 
  const [rolledValue, setRolledValue] = useState(1);
  const roll = () => {
      setRolledValue(Math.ceil(Math.random() * 3 + 1));
    };
  const [squares,setSquares] = useState (Array(16).fill(null));
    
    const [score, setScore]= useState({
      player:9,
      grogu:0 
    });


  const checkGame = squares => {
    setTurn(turn=== 'cookie' );
  }

  const handleClick= square => {
    let newSquares = [...squares];
    newSquares.splice(square,1,turn);
    setSquares(newSquares);
    checkGame(newSquares);

  }

                
  return(
    <div className="game-container">
    
        <Dice />
        <Board squares={squares}/>
      
    </div>
  )
}