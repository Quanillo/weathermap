const Weather = ({weather}) => {
    
    if(weather.data===null){
        return <p></p>
    }
    else{
        return (
            <div>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img>
                <h3>{weather.weather[0].main}</h3>
                <p>{weather.weather[0].description}</p>
                <p>Temperature: {weather.main.temp}°C</p>
                <p>Thermal sensation: {weather.main.feels_like}°C </p>
                <p><span>Max: {weather.main.temp_max}</span><span>&nbsp;&nbsp;&nbsp;&nbsp;Min: {weather.main.temp_min}</span></p>
                <p>Humidity: {weather.main.humidity}</p>
            </div>
        )
    }
    
}
export { Weather }