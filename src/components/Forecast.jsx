const Forecast = ({ forecast }) => {

    return (
        <div>
            {
                weather.data !== 'null' && weather.data !== null
                    ? <div>
                        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img>
                        <h3>{weather.weather[0].main}</h3>
                        <p>{weather.weather[0].description}</p>
                        <p>Temperature: {weather.main.temp}°C</p>
                        <p>Thermal sensation: {weather.main.feels_like}°C </p>
                        <p><span>Max: {weather.main.temp_max}°C</span><span>&nbsp;&nbsp;&nbsp;&nbsp;Min: {weather.main.temp_min}°C</span></p>
                        <p>Humidity: {weather.main.humidity}%</p>
                    </div>
                    : null
            }

        </div>
    )
}
export { Forecast }