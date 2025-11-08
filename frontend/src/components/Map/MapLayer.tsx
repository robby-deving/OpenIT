import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function MapLayer() {
  return (
    <MapContainer className='overflow-hidden z-0' center={[13.948765072291742, 121.6141711022477]} zoom={13} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[13.948765072291742, 121.6141711022477]}>
        <Popup>
          This is a popup
        </Popup>
      </Marker>
    </MapContainer>
  )
}
