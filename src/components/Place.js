import  { useState, useEffect } from 'react'
import axios from 'axios'

const Place = ({place}) => {
    const [ country, setCountry ] = useState({data: null})
    useEffect(() => {
        if (place.data !== null) {
            axios.get(`https://restcountries.com/v3.1/alpha/${place.country}`)
            .then((data) => {
                setCountry(data.data[0])
            });
        }
      }, [place]);
      
    if(place.data===null || country.data===null){
        return <p></p>
    }
    else{
       
        return (
            <div>
                <img src={country.flags.png}  width="100" height="auto" />
                <h3>{place.name}</h3>
                <p>{country.name.common}</p>
                <p>{country.region}</p>
                <p>Latitude: {place.lat}</p>
                <p>Longitude: {place.lon}</p>
            </div>
        )
    }
    
}
export { Place }

/*
 function posHandler(place) {
            const newPlace = place;
            setCountry(newPlace);
        }
        console.log(place);



    useEffect(() => {
        if (place.data !== null) {
            axios.get(`https://restcountries.com/v3.1/alpha/${place.country}`)
            .then((data) => {
                console.log(data);
            });
        }
      }, [place]);

*/