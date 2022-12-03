import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { MapView } from './components/maps/MapView'
import { Weather } from './components/Weather'
import { Air } from './components/Air'
import { Place } from './components/Place'

const key = import.meta.env.VITE_API_KEY

function App() {
  const [pos, setPos] = useState({ data: null });
  const [weather, setWeather] = useState({ data: null });
  const [air, setAir] = useState({ data: null });
  const [place, setPlace] = useState({ data: null });

  function posHandler(param) {
    const newParam = param;
    setPos(newParam);
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

  return (
    <div className="App">
      <h1>Weather Map</h1>
      <div id="map">
        <MapView posHandler={posHandler} />
      </div>
      <div id="info">
        <Place place={place} />
        <Weather weather={weather} />
        <Air air={air} />
      </div>

    </div>
  );
}

export default App
