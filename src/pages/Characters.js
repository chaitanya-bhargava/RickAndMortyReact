import { useEffect, useState } from "react";
import CardGrid from "../components/CardGrid";
import Heading from "../components/Heading";

const Characters = () => {
    const [characters,setCharacters] =useState([]);
    useEffect(()=>{
        async function fetchData(){
            const response= await fetch("https://rickandmortyapi.com/api/character/");
            const data=await response.json();
            const transformedData=data.results.map((character)=>{
                return {
                    id:character.id,
                    name:character.name,
                    status:character.status,
                    species:character.species,
                    gender:character.gender,
                    image:character.image
                }
            })
            setCharacters(transformedData);
        }
        fetchData();
    },[])
    return <div>
        <Heading text="Characters" />
        <CardGrid type="char" list={characters}/>
    </div>
}

export default Characters;