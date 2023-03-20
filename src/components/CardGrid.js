import Card from "./Card";
import './CardGrid.css';
const CardGrid = (props) => {
  return (
    <div className="grid">
      {props.list.map((item) => (
          <Card
            type={props.type}
            name={item.name}
            gender={item.gender}
            image={item.image}
            species={item.species}
            status={item.status}
            air_date={item.air_date}
            episode={item.episode}
            loctype={item.loctype}
            dimension={item.dimension}
          />
      ))}
    </div>
  );
};
export default CardGrid;
