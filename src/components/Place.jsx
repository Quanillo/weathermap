import { useState, useEffect } from 'react'
import axios from 'axios'

const Place = ({ place }) => {
    const [country, setCountry] = useState({ data: null })
    useEffect(() => {
        if (place.data !== null) {
            axios.get(`https://restcountries.com/v3.1/alpha/${place.country}`)
                .then((data) => {
                    setCountry(data.data[0])
                });
        }
    }, [place]);

    return (
        <div>
            {
                place.data !== 'null' && place.data !== null && country.data !== 'null' && country.data !== null
                    ?
                    <div  className="infoChild">
                        <h3 className='itemHead'>{place.name}</h3>
                        <img src={country.flags.png} width="200" height="auto" />
                        <p>{country.name.common}</p>
                        <p>{country.region}</p>
                        <p>Latitude: {place.lat}</p>
                        <p>Longitude: {place.lon}</p>
                    </div>
                    : null
            }
        </div>
    )
}
export { Place }