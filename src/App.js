import  { useState } from 'react'
import axios from 'axios'
import './App.css';
import { MapView } from './components/maps/MapView'
import { Weather } from './components/Weather'
import { Air } from './components/Air'
import { Place } from './components/Place'

const key = process.env.REACT_APP_API_KEY

function App() {
  const [pos, setPos] = useState({lat:40.41625039937417, lng:-3.7009149751910013});
  const [weather, setWeather] = useState({data: null});
  const [air, setAir] = useState({data: null});
  const [place, setPlace] = useState({data: null});

  function handleWeather() {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.lat}&lon=${pos.lng}&units=metric&appid=${key}`)
          .then((data) => {
          setWeather(data.data);
          });
  }

  function handleAir() {
    axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${pos.lat}&lon=${pos.lng}&appid=${key}`)
        .then((data) => {
        setAir(data.data);
        });
  }   

  function handlePlace() {
    axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${pos.lat}&lon=${pos.lng}&appid=${key}`)
        .then((data) => {
          setPlace(data.data[0]);
        });
  }   

  function posHandler(param){
    setPos(param);
    handleWeather();
    handleAir();
    handlePlace();
  }

  console.log(place)

  return (
    <div className="App">
      <h1>Weather Map</h1>
    <div  id="map">
      <MapView posHandler={posHandler}/>
    </div>
    <div id="info">
      <Weather  weather={weather}/> 
      <Air air={air}/> 
      <Place place={place} />
    </div>  

    </div>
  );
}

export default App;


/*

const [ country, setCountry ] = useState([])
        function putCountry() {
            axios.get(`https://restcountries.com/v3.1/alpha/${place.country}`)
                .then((data) => {
                    setCountry(data.data);
                });
        }
*/