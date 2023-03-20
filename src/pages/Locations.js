import { useEffect, useState } from "react";
import CardGrid from "../components/CardGrid";
import Heading from "../components/Heading";

const Locations = () => {
    const [locations,setLocations] =useState([]);
    useEffect(()=>{
        async function fetchData(){
            const response= await fetch("https://rickandmortyapi.com/api/location/");
            const data=await response.json();
            const transformedData=data.results.map((location)=>{
                return {
                    id:location.id,
                    name:location.name,
                    loctype:location.type,
                    dimension:location.dimension
                }
            })
            setLocations(transformedData);
        }
        fetchData();
    },[])
    return <div>
        <Heading text="Locations" />
        <CardGrid type="loc" list={locations}/>
    </div>
}

export default Locations;