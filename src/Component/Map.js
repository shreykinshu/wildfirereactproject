import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import Locationinfobox from './Locationinfobox'
import { useState } from 'react'
 const Map = ({eventData,center,zoom}) => {
    const [locationInfo, setLocationInfo] = useState(null)
   const marker=eventData.map(ev=>{
       if(ev.categories[0].id===8)
       {
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} 
            onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
            />
       }
       return null;
   })


    return (
        <div className="map">
            <GoogleMapReact
            bootstrapURLKeys={{key:'AIzaSyDzP1IrXEt4em95MtRrjYkswlmx-4E7OW0'}}
            defaultCenter={center}
            defaultZoom={zoom}
            >
                {marker}
            </GoogleMapReact>
            console.log(locationInfo)
            {locationInfo && <Locationinfobox info={locationInfo}/>}
            
        </div>
    )
}

Map.defaultProps={
 center:{
     lat:20.5937,
     lng:78.9629
 },
 zoom: 6
}
export default Map