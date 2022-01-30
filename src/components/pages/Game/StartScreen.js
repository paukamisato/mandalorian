
import Button from "../../Button/Buttton"

export default function StartScreen(props) {

    

    return (
        <div className="bg">
            <div className='text-box'>
                <h1 className='startscreen-title'>¡Cuidado con Grogu!</h1>
                <Button label="Start" action={ () => props.setStart(1) }/>
             </div>
        </div>
 
    )
}