import Button from "../components/Button";
import Heading from "../components/Heading";
import './Home.css';
const Home = () => {
  return (
    <div className="home">
      <Heading text="Home" />
      <p className="home-text">
        This website uses the Rick and Morty API to fetch info about Characters, Locations and Episodes and display them in the form of grids on separate pages. <br/>
        It is a fully responsive React.js based website made by utilising features such as:<br/>
        ReactRouter<br/>
        API calls<br/>
        CSS Grid<br/>
        Find more such projects on my github: <a href="https://github.com/chaitanya-bhargava">https://github.com/chaitanya-bhargava</a><br/>
        <b>WUBBA LUBBA DUB DUB!</b>
      </p>
      <div className="button-list">
        <Button text="Characters"/>
        <Button text="Locations" />
        <Button text="Episodes" />
      </div>
    </div>
  );
};

export default Home;
