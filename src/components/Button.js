import './Button.css'
import { Link } from 'react-router-dom';
const Button =(props)=>{
    return <button className="custom-button" onClick={props.onClick}>
        <Link to={props.text.toLowerCase()}>
            {props.text}
        </Link>
    </button>
}

export default Button;