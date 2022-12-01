import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const center = [40.41625039937417, -3.7009149751910013];

const MapView = () => {
    return (
        <div id="map">
            <MapContainer
            center={center}
            zoom={1.3}
            style={{ width: '60vw', height: '60vh'}}
            >
                <TileLayer
                    url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=qod66e6AXBoydMIT0Ulm"
                />
            </MapContainer>
        </div>
    )
}

export { MapView }



/*
attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'              
 */