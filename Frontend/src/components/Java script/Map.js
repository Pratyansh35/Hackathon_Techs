import React, { useEffect, useState } from "react";
import {GoogleMap,useLoadScript,MarkerF} from '@react-google-maps/api';
import axios from 'axios'
import "../css/Map.css"

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
        <div className="agency-main">
            <div className="left-part-agent">
                <GoogleMap
                onLoad={onMapLoad}
                mapContainerStyle={{width:"1000px",height:"800px",margin:"20px"}}
                center={{lat:20.5937,lng:78.9629}}
                zoom={5.2}>

                    {
                        agencydetails.map(agency=>{
                            return <MarkerF position={agency.location} onClick={()=>{
                                alert("you clicked")
                            }}/>
                        })
                    }
                </GoogleMap>
            </div>
            <div className="right-part-agent">
                {
                    agencydetails.map(agency=>{
                        return <div className="agencycard">
                            <label className="labbelname">Agency Name : {agency.agencyname}</label>
                            <label  className="labbel">City : {agency.city}</label>
                            <label className="labbel">State : {agency.state}</label>
                            <label className="labbel">Address : {agency.address}</label>
                            <label className="labbel">Specialized : {
                                agency.specializedarea.map(e=>{
                                    return <label>{e}</label>
                                })
                                }</label>
                            <label className="labbelres">Resources : {
                                agency.resources.map(e=>{
                                    return <div>
                                        <label>Resource Type : {e.resourcetype}</label>
                                        <label>Count : {e.count}</label>
                                        <label>Man Power : {e.manpower}</label>
                                    </div>
                                })
                            }</label>
                            </div>
                    })
                }
            </div>
        </div>
    )
}

export default AgencyMapComponent