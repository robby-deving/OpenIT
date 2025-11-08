import useGeoLocation from '@/hooks/useGeoLocation';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import user from '@/assets/userLocation.svg'
import emergencyLocations from '@/assets/emergencyLocations.svg'
import L from 'leaflet';
import { useEffect,useState } from 'react';

interface Location{
  loaded:boolean,
  coordinates: coordinates
}
interface coordinates{
  lat: number,
  lng: number
}

interface emergencyLocation{
  latitude:number
  longitude:number,
  id:number,
  name:string
}

  const userLocation = new L.Icon({
  iconUrl: user,
  iconSize: [30, 30],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
  });

  const location = new L.Icon({
  iconUrl: emergencyLocations,
  iconSize: [50, 30],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
  });
export default function MapLayer() {

  const [emergencyLocations, setemergencyLocations] = useState([]);
  const getLocations = async () =>{
    const response = await fetch('http://localhost:3000/api/locations')

    const result = await response.json()
    

    setemergencyLocations(result);
    
  }


  useEffect(()=>{
    getLocations()
  },[])



  const userlocation: any = useGeoLocation();
  console.log(userlocation);
  
  return (
    <MapContainer className='overflow-hidden z-0' center={[13.948765072291742, 121.6141711022477]} zoom={13} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {userlocation.loaded && !userlocation.error && (
        <Marker position={[userlocation.coordinates.lat, userlocation.coordinates.lng]} icon={userLocation}>
              <Popup>
                This is your location
              </Popup>
        </Marker>
      )}             

        {emergencyLocations.map((emergencyLocation) => {
                const lat = emergencyLocation.latitude || 0;  
                const lon = emergencyLocation.longitude || 0; 
                return (
                  <Marker
                    key={emergencyLocation.id}
                    position={[lat, lon]}
                    icon={location}

                  >
                    <Tooltip
                      direction="top"
                      offset={[5, -30]}
                      opacity={1}
                      permanent={false}
                    >
                      <div className="px-3 py-1 rounded font-semibold text-sm">
                        {emergencyLocation.name}
                      </div>
                    </Tooltip>
                  </Marker>
                );
          })}
    </MapContainer>
  )
}
