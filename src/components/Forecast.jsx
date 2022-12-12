import getDayOfYear from "date-fns/getDayOfYear";

const Forecast = ({ forecast }, props) => {
    if (forecast.data !== 'null' && forecast.data !== null) {
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
        function setForecastDay(item){
            props.handleForecastDay(item);
        }
        return (
            <div>
                {
                <ul>
                    {groupByDayList(forecast.list).map(x=>x.filter((j)=>j.dt_txt.split(' ')[1]==='12:00:00')).flat().map((item=>
                            <li key={item.dt_txt} >
                                <div onClick={() => setForecastDay(item)}>
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

            </div >
        )
    }
    else {
        return null;
    }
}
export { Forecast }

/*

                    {groupByDayList(forecast.list).map(x=>x.filter((j)=>j.dt_txt.split(' ')[1]==='12:00:00')).flat().map((item=>
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

*/