import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

function Countries(){
    const API_ENDPOINT = "https://xcountries-backend.azurewebsites.net/all";
    //const flags = [1,2,3,4,5,6,7,8,9,10,11,12,13];

    const [flags,setFlags] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCountries = async () => {

        try {
        const response = await fetch(API_ENDPOINT);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setFlags(data);
      } catch (err) {
        console.error("Error fetching data: ", err);
        setError(err.message);
      }
    };

    fetchCountries();
    } ,[]);

    if (error) {
        return <p>Error: {error}</p>;
      }

    return (
        <div style={{display:"flex", flexWrap:"wrap" }}>
            {flags.map((flag) => (
                <CountryCard key={flag.abbr} name={flag.name} flagImg={flag.flag} flagAlt={flag.abbr} />
            ))}
        </div>
    );   
}

export default Countries