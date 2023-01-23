import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { MapView } from './components/maps/MapView'
import { Weather } from './components/Weather'
import { Air } from './components/Air'
import { Place } from './components/Place'
import { Forecast } from './components/Forecast'

const key = import.meta.env.VITE_API_KEY

function App() {
  const [pos, setPos] = useState({ data: null });
  const [weather, setWeather] = useState({ data: null });
  const [air, setAir] = useState({ data: null });
  const [place, setPlace] = useState({ data: null });
  const [forecast, setForecast] = useState({ data: null });

  function posHandler(latlon) {
    const newPos = latlon;
    setPos(newPos);
  }

  useEffect(() => {
    if (pos.data !== null) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.lat}&lon=${pos.lng}&units=metric&appid=${key}`)
        .then((data) => {
          setWeather(data.data);
        });
    }
  }, [pos]);

  useEffect(() => {
    if (pos.data !== null) {
      axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${pos.lat}&lon=${pos.lng}&appid=${key}`)
        .then((data) => {
          setAir(data.data);
        });
    }
  }, [pos]);

  useEffect(() => {
    if (pos.data !== null) {
      axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${pos.lat}&lon=${pos.lng}&appid=${key}`)
        .then((data) => {
            if(data.data.length>0)
              setPlace(data.data[0]);
        });
    }
  }, [pos]);

  useEffect(() => {
    if (pos.data !== null) {
      axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${pos.lat}&lon=${pos.lng}&units=metric&appid=${key}`)
        .then((data) => {
          setForecast(data.data)
        });
    }
  }, [pos]);

  return (
    <div className="App">
      <div id="head">
        <div id="map">
          <MapView posHandler={posHandler} />
        </div>
        <div id="info">
          <Place place={place} />
        </div>
      </div>
      <div id="weather">
          <Weather weather={weather} /> 
          <Air air={air} />
      </div>  
      <div id="forecast">
        <Forecast forecast={forecast}/>
      </div>
    </div>
  );
}

export default App

/*
        <Weather weather={weather} />

          background: linear-gradient(
    to right,
    #e5dacf 0%,
    #e5dacf 50%,
    #333031 50%,
    #333031 100%
  );
*/