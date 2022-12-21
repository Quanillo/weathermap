import { getDayOfYear } from "date-fns"
import format from "date-fns/format"
const ForecastDay = (props) => {
    return (
        
            <div  className="forecast">
                {props.forecast.filter(x=>getDayOfYear(Date.parse(x.dt_txt)) === getDayOfYear(Date.parse(props.forecastDay.dt_txt))).map((item=>
                                <div className="forecastElement" key={item.dt_txt} >
                                   
                                        <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}></img>
                                        <p className="title">{format(Date.parse(item.dt_txt), 'EEEE H:mm')}</p>
                                        <p className="temp">{item.main.temp}°C</p>
                                        <p>{item.weather[0].main}</p>
                                        <p>{item.weather[0].description}</p>
                                        <p>{item.main.humidity}%</p>
                             
                                </div>
                        ))}
            </div>
            
    )
}
export { ForecastDay }
