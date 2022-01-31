import './Square.css';
import classNames from 'classnames';

const CookieSquare = ({ value }) => {

    let squareClass = classNames({
        square: true,
        ['square--x']: value === 'x',
        
    });


    return (
        <div className= { squareClass } >
            <i class="cookie fas fa-cookie-bite"></i>
            {console.log('cook',squareClass,value)}
        </div>
    )
}

export default CookieSquare;
