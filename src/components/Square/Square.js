import classNames from 'classnames';
import './Square.css';


const Square = ({value }) => {

    let squareClass = classNames({
        square: true,
        ['square--x']: value === 'x',
        
    });

   
    return (
        <div className= { squareClass }>
          {console.log('square',squareClass,value)}
        </div>
    )
}

export default Square;



