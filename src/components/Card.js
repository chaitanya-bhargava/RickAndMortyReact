import './Card.css';
const Card=(props)=>{
    if(props.type==="char"){
        return <div className="card">
        <img src={props.image} alt="img"/>
        <div className='card-text'>
        Name: {props.name}<br/>
        Gender: {props.gender} <br/>
        Species: {props.species} <br/>
        Status: {props.status} <br/>
        </div>
    </div>
    }
    if(props.type==="loc"){
        return <div className="card">
        <img src="epi.jpg" alt="img"/>
        <div className='card-text'>
        Name: {props.name}<br/>
        Type: {props.loctype} <br/>
        Dimension: {props.dimension} <br/>
        </div>
    </div>
    }
    if(props.type==="epi"){
        return <div className="card">
        <img src="epi.jpg" alt="img"/>
        <div className='card-text'>
        Name: {props.name}<br/>
        Air Date: {props.air_date} <br/>
        Episode: {props.episode} <br/>
        </div>
    </div>
    }
}
export default Card;