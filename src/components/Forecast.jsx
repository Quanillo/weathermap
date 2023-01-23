import getDayOfYear from "date-fns/getDayOfYear";
import format from "date-fns/format";
import { ForecastDay } from "./ForecastDay";
import { useState } from 'react'
const Forecast = (props) => {
    const [forecastDay, setForecastDay] = useState({ data: null });
    const [showForecastDay, setShowForecastDay] = useState(false);
    if (props.forecast.data !== 'null' && props.forecast.data !== null) {

        const groupByDayList = (list) => {    
            let a = []; 
            let aux = []
            list.map(function(el, index, src){
                if(index!== 0 && getDayOfYear(Date.parse(el.dt_txt)) !== getDayOfYear(Date.parse(src[index-1].dt_txt))){    
                    a.push(aux); 
                    aux = [];
                    aux.push(el);
                }
                else{
                    aux.push(el);
                }
            })
            return a
        }
        const a = (item) => {
            setForecastDay(item);
            setShowForecastDay(true);
        }
        if(!showForecastDay){
            return (
                    <div className="forecast">
                        {groupByDayList(props.forecast.list).map(x=>x.filter((j)=>j.dt_txt.split(' ')[1]==='12:00:00')).flat().map((item=>
                                <div   className="forecastElement"  key={item.dt_txt} onClick={() => a(item)}>
                                    
                                        <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}></img>
                                        <p className="title">{format(Date.parse(item.dt_txt) , 'EEEE')}</p>
                                        <p className="temp">{item.main.temp}°C</p>
                                        <p>{item.weather[0].main}</p>
                                        <p>{item.weather[0].description}</p>
                                        <p>{item.main.humidity}%</p>
                                  
                                </div>
                        ))}
                    </div>
            )
        }
        else{
            return (
                <div className="forecast">
                     <button onClick={()=> setShowForecastDay(false)}>back</button>
                    <ForecastDay forecastDay={forecastDay} forecast={props.forecast.list}/>
                </div>
            )
        }
        
    }
    else {
        return null;
    }
}
export { Forecast }

