import { useEffect, useState } from "react";
import CardGrid from "../components/CardGrid";
import Heading from "../components/Heading";

const Episodes = () => {
    const [episodes,setEpisodes] =useState([]);
    useEffect(()=>{
        async function fetchData(){
            const response= await fetch("https://rickandmortyapi.com/api/episode");
            const data=await response.json();
            const transformedData=data.results.map((episodes)=>{
                return {
                    id:episodes.id,
                    name:episodes.name,
                    air_date:episodes.air_date,
                    episode:episodes.episode,
                }
            })
            setEpisodes(transformedData);
        }
        fetchData();
    },[])
    return <div>
        <Heading text="Episodes" />
        <CardGrid type="epi" list={episodes}/>
    </div>
}

export default Episodes;