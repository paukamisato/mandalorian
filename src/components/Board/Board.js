import Square from '../Square/Square';
import CookieSquare from '../Square/CookieSquare';
import EggSquare from '../Square/EggSquare';
import FrogSquare from '../Square/FrogSquare';
import './Board.css';

const Board = ({ squares,cookieSquares, eggSquares, frogSquares}) => {

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
          value={cookieSquares[value]}
          key={`cookieSquares_${value}`}
          />
        ))
    );
    const createFrogSquares = values => (
        values.map( value => (
          <FrogSquare 
          value={frogSquares[value]}
          key={`frogSquares_${value}`}
          />
        ))
    );
    const createEggSquares = values => (
        values.map( value => (
          <EggSquare 
          value={eggSquares[value]}
          key={`eggSquares_${value}`}
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
                     {createCookieSquares([0,1,2])}
                    </div>
                    <div className="shipload-row">
                        {createFrogSquares([0,1,2])}
                    </div>
                    <div className="shipload-row">
                        {createEggSquares([0,1,2])}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Board;