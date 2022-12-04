const Forecast = ({ forecast }) => {

    if (forecast.data !== 'null' && forecast.data !== null) {
        console.log(forecast)
        return (
            <div>
                {
                    <div>
                        {
                            <ul>
                                {forecast.list.filter((x, index)=>index%4===0).map((item=>
                                        <li key={item.dt_txt} >
                                            <div>
                                            <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}></img>
                                                <p>{item.dt_txt}</p>
                                                <p>{item.weather[0].main}</p>
                                                <p>{item.weather[0].description}</p>
                                                <p>{item.main.temp}°C</p>
                                                <p>{item.main.humidity}%</p>
                                            </div>
                                        </li>
                                ))}
                            </ul>
                        }
                    </div>
                }

            </div >
        )
    }
    else {
        return null;
    }

}
export { Forecast }


