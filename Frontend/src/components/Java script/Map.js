import React, { useEffect, useState } from "react";
import {GoogleMap,useLoadScript,MarkerF} from '@react-google-maps/api';
import axios from 'axios'

const AgencyMapComponent=()=>{

    const [agencydetails,setagentdetails]=useState([])

    const {isLoaded,loadError} = useLoadScript({
        googleMapsApiKey:"AIzaSyAoBXELbu5nZJghKxa-eTgsur8XsgOaHCM"
    });
    const mapRef=React.useRef();
    const onMapLoad=React.useCallback((map)=>{
        mapRef.current=map;
    },[]);
    useEffect(()=>{
        axios.get("http://localhost:4000/getagencydetails")
        .then(res=>{
            setagentdetails(res.data);
            console.log(res.data)
        })
    },[])
    if(loadError) return "Error";
    if(!isLoaded) return "Maps"
    return(
        <div>
            <GoogleMap
            onLoad={onMapLoad}
            mapContainerStyle={{width:"700px",height:"500px"}}
            center={{lat:20.5937,lng:78.9629}}
            zoom={4.2}>

                {
                    agencydetails.map(agency=>{
                        return <MarkerF position={agency.location} onClick={()=>{
                            alert("you clicked")
                        }}/>
                    })
                }
            </GoogleMap>
        </div>
    )
}

export default AgencyMapComponent