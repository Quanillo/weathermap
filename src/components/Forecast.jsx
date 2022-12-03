const Forecast = ({ forecast }) => {

    if (forecast.data !== 'null' && forecast.data !== null) {
        const forecastItems = forecast.list.map((item, index) => {
            {
                {console.log(item.dt_txt)}
                <li>{item.dt_txt}</li>
            }
        })

        return (
            <div>
                {
                    <div>
                        {
                            <ul>
                                {forecastItems}
                            </ul>
                        }
                    </div>
                }

            </div>
        )
    }
    else {
        return null;
    }

}
export { Forecast }

/*
                        <div>
                                <p>{forecast.list[0].dt_txt}</p>
                                <p>{forecast.list[10].dt_txt}</p>
                            </div>


                                function Forecasts(list) {
 <li>{props.value}</li>
    }
*/

