const Forecast = ({ forecast }) => {

    if (forecast.data !== 'null' && forecast.data !== null) {

        //let date = new Date(forecast.list[0].dt_txt)
        //console.log(date.toLocaleDateString('en-US', {weekday: 'long',}))
        //console.log(date.getDay())
        function groupByDayList (list) {
            let aux = []
            return list.reduce((acc, el, index, src)=>{
                if(el.dt_txt.getDay !== src[index-1].dt_txt.getDay){
                    acc.push(aux);
                    aux = [];
                    aux.push(el);
                }
                else{
                    aux.push(el);
                }
            })
        }
        let a = groupByDayList(forecast.list)
        a.map(x=>console.log(x))
        return (
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

            </div >
        )
    }
    else {
        return null;
    }
}
export { Forecast }