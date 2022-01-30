import Square from '../Square/Square';
import CookieSquare from '../Square/CookieSquare';
import EggSquare from '../Square/EggSquare';
import FrogSquare from '../Square/FrogSquare';
import './Board.css';

const Board = ({squares}) => {

    const createSquares = values => (
        values.map( value => (
          <Square 
          value={squares[value]}
          key={`squares_${value}`}
          />
        ))
    );
    const createCookieSquares = values => (
        values.map( value => (
          <CookieSquare 
          value={squares[value]}
          key={`squares_${value}`}
          />
        ))
    );
    const createFrogSquares = values => (
        values.map( value => (
          <FrogSquare 
          value={squares[value]}
          key={`squares_${value}`}
          />
        ))
    );
    const createEggSquares = values => (
        values.map( value => (
          <EggSquare 
          value={squares[value]}
          key={`squares_${value}`}
          />
        ))
    );




    return (
        <div className="board">
            <div className='row-board'>
                <div className='col-1-of-2'>
                    <div className="zone-row">
                        {createSquares([0,1,2,3,4,5,6])}
                    </div>
                </div>
                <div className='col-1-of-2'>
                    <div className="shipload-row">
                     {createCookieSquares([7,8,9])}
                    </div>
                    <div className="shipload-row">
                        {createFrogSquares([10,11,12])}
                    </div>
                    <div className="shipload-row">
                        {createEggSquares([13,14,15])}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Board;