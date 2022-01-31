import './Square.css';
import classNames from 'classnames';

const EggSquare = ({ value }) => {

    let squareClass = classNames({
        square: true,
        ['square--x']: value === 'x',
        
    });

    return (
        <div className= { squareClass }>
            <i class="egg fas fa-egg"></i>
        </div>
    )
}

export default EggSquare;
