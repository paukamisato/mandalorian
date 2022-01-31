import './Square.css';
import classNames from 'classnames';

const FrogSquare = ({ value}) => {

    let squareClass = classNames({
        square: true,
        ['square--x']: value === 'x',
        
    });

    return (
        <div className= { squareClass }>
            <i class="frog fas fa-frog"></i>
            {console.log('frog',squareClass,value)}
        </div>
    )
}

export default FrogSquare;