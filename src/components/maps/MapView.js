import  { useState } from 'react'
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const center = [40.41625039937417, -3.7009149751910013];

const MapView = () => {
    
    const [pos, setPos] = useState({});

    function LocationMarker() {
        useMapEvents({
            click: (e) => {
                setPos(e.latlng);   
            },
        })
        return null
    }

    console.log(pos);

    return (
        <div>
            <MapContainer
                center={center}
                zoom={1.5}
                style={{ height: "50vh" }}
            >
                <TileLayer
                    url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=qod66e6AXBoydMIT0Ulm"
                />
                <LocationMarker />
            </MapContainer>
           
        </div>
    )
}
export { MapView }