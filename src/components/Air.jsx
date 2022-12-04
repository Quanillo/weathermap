const Air = ({ air }) => {

    if (air.data !== 'null' && air.data !== null) {
        let aqi = '';
        function setAqui() {
            if (air.list[0].main.aqi == 1)
                aqi = 'Good';
            else if (air.list[0].main.aqi == 2)
                aqi = 'Fair';
            else if (air.list[0].main.aqi == 3)
                aqi = 'Moderate';
            else if (air.list[0].main.aqi == 4)
                aqi = 'Poor';
            else if (air.list[0].main.aqi == 5)
                aqi = 'Very Poor';
        }
        setAqui();
        return (
            <div>
                <div class="infoChild">
                    <h3>Air Pollution</h3>
                    <p>AQI(Air Quality Index): {aqi}</p>
                    <br />
                    <p>Carbon monoxide level: {air.list[0].components.co}&nbsp;μg/m3</p>
                    <p>Nitrogen monoxide level: {air.list[0].components.no}&nbsp;μg/m3</p>
                    <p>Nitrogen dioxide level: {air.list[0].components.no2}&nbsp;μg/m3</p>
                    <p>Ozone level: {air.list[0].components.o3}&nbsp;μg/m3</p>
                    <p>Fine particles matter: {air.list[0].components.pm2_5}&nbsp;μg/m3</p>
                </div>
            </div>
        )
    }
    return null;
}
export { Air }



/*import { useState, useEffect } from "react";

const Air = ({ air }) => {
    const [aqi, setAqi] = useState('')

    useEffect(() => {
        if(air.data !== 'null' && air.data !== null)
        if (air.list[0].main.aqi == 1)
            setAqi('Good');
        else if (air.list[0].main.aqi == 2)
            setAqi('Fair');
        else if (air.list[0].main.aqi == 3)
            setAqi('Moderate');
        else if (air.list[0].main.aqi == 4)
            setAqi('Poor');
        else if (air.list[0].main.aqi == 5)
            setAqi('Very Poor');
    }, [air.list[0].main.aqi]);

    if (air.data !== 'null' && air.data !== null) {

        return (
            <div>
                <div>
                    <h3>Air Pollution</h3>
                    <p>AQI(Air Quality Index): {aqi}</p>
                    <br />
                    <p>Carbon monoxide level: {air.list[0].components.co}&nbsp;μg/m3</p>
                    <p>Nitrogen monoxide level: {air.list[0].components.no}&nbsp;μg/m3</p>
                    <p>Nitrogen dioxide level: {air.list[0].components.no2}&nbsp;μg/m3</p>
                    <p>Ozone level: {air.list[0].components.o3}&nbsp;μg/m3</p>
                    <p>Fine particles matter: {air.list[0].components.pm2_5}&nbsp;μg/m3</p>
                </div>
            </div>
        )
    }
    return null;
}
export { Air }*/