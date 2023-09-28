import React, { useEffect, useState } from "react";
import {GoogleMap,useLoadScript,MarkerF} from '@react-google-maps/api';
import {loc} from "./Locations.js";
// import blueloclogo from '../images/smallbluenavlogo.png'
import Details from "./Detail.js";
import '../css/Map.css'
import Header from "./Header.js";
const MapComponent = ()=>{
    const [latitude,setLatitude]=useState();
    const [longitude,setLongitude]=useState();
    var radiusset=9999999999;
    const [radius,setRadius]=useState();
    const [clat,setCLat]=useState();
    const [clong,setCLong]=useState();
    var locations=loc;    //stores all the locations(name,...,lat,lng) after or before onclick on map
    var [radloc,setRadloc]=useState([]);//stores all the locations(name,...,lat,lng) after or before onclick on map
    var dislist=[];
    const [enable,setEnable]=useState(Boolean);
    const [disasterlist,setDisasterlist]=useState([]);

    var reslist=[];
    const [resoucelist,setResourcelist]=useState([]);

    var [nearbyloccity,setNearbyloccity]=useState("");
    var [nearbylocstate,setNearbylocstate]=useState("");

    var isreset=false;

    var disloc=[]
    var disastervalue="";
    var [disvalue,setDisvalue]=useState();

    var resvalue="";
    var [resourcevalue,setResourcevalue]=useState();

    useEffect(()=>{
        setEnable(true);
        locations=loc;
        setRadloc(loc);
        radiusset=9999999999;
        setRadius(10000000000);
        setCLat(20.5937);
        setCLong(78.9629);
        getnearpoint(20.5937,78.9629);
        var dlist=[]
        loc.map(location=>{
            dlist.push(location.disaster_type);
            // console.log(location.disaster_type)
        })

        //deleting duplicates
        var l=[]
        dlist.map(value=>{
            var flag=0;
            l.map(e=>{
                if(e===value){
                    flag=1;
                }
            })
            if(flag===0){
                l.push(value);
            }
        })

        dislist=l;
        setDisasterlist(dislist);
        dis();
    },[]);

    const dis=()=>{
        console.log(dislist)
    }
      
    const callatdis=(l1,l2)=>{
        return (l1-l2)*110.567;
    }
    const callongdis=(l1,l2)=>{
        return (l1-l2)*111.32;
    }
    const caldis=(la,ln)=>{
        return Math.sqrt((la*la)+(ln*ln));
    }  

    const getnearpoint=(cl,cL)=>{
        var min=3874798873.009;
        locations.map(location=>{
            var ladis=callatdis(location.location.lat,cl);
            var lndis=callongdis(location.location.lng,cL);
            if(min>caldis(ladis,lndis)){
                min=caldis(ladis,lndis);
                setNearbyloccity(location.city);
                setNearbylocstate(location.state);
            }
        })

    }
    
    const getrad=()=>{
        var newlocations=[];
        loc.map(location=>{
            const ladis=callatdis(location.location.lat,latitude);
            const lndis=callongdis(location.location.lng,longitude);
            if(caldis(ladis,lndis)<=radiusset){
                newlocations.push(location);
            }
        })
        locations=newlocations;
        setRadloc(locations);
        //types of disaster
        var dlist=[]
        newlocations.map(location=>{
            dlist.push(location.disaster_type);
        })
        //deleting duplicates
        var l=[]
        dlist.map(value=>{
            var flag=0;
            l.map(e=>{
                if(e===value){
                    flag=1;
                }
            })
            if(flag===0){
                l.push(value);
            }
        })

        dislist=l;
        setDisasterlist(dislist);
        dis();
        getnearpoint(latitude,longitude);

    }

    const getradall=()=>{
        var newlocations=[];
        loc.map(location=>{
            const ladis=callatdis(location.location.lat,latitude);
            const lndis=callongdis(location.location.lng,longitude);
            if(caldis(ladis,lndis)<=radius){
                newlocations.push(location);
            }
        })
        locations=newlocations;
        setRadloc(locations);
        //types of disaster
        var dlist=[]
        newlocations.map(location=>{
            dlist.push(location.disaster_type);
        })
        //deleting duplicates
        var l=[]
        dlist.map(value=>{
            var flag=0;
            l.map(e=>{
                if(e===value){
                    flag=1;
                }
            })
            if(flag===0){
                l.push(value);
            }
        })

        dislist=l;
        setDisasterlist(dislist);
        dis();
        getnearpoint(latitude,longitude);

    }
    const getdisfilter=()=>{
        var newlist=[]
        locations.map(location=>{
            const ladis=callatdis(location.location.lat,latitude);
            const lndis=callongdis(location.location.lng,longitude);
            if(location.disaster_type==disastervalue && caldis(ladis,lndis)<=radius){
                newlist.push(location);
            }
        })
        disloc=newlist;
        setRadloc(newlist);
    }

    const changeresourcefilter=()=>{
        var newlist=[]
        locations.map(location=>{
            const ladis=callatdis(location.location.lat,latitude);
            const lndis=callongdis(location.location.lng,longitude);
            var s=location.resources_required;
            var flag=0;
            var list=s.split(",");
            list.map(e=>{
                if(e.charCodeAt(0)==32){
                    if(e.slice(1,e.length)==resvalue)flag=1
                }
                else{
                    if(e==resvalue)flag=1
                }
                })
            if(flag==1 && caldis(ladis,lndis)<=radius){
                newlist.push(location);
            }
        })
        console.log(newlist)
        setRadloc(newlist);
    }

    const getresourcefilter=()=>{
        locations.map(location=>{
            var s=location.resources_required;
            var list=s.split(",");
            var newlist=[]
            list.map(e=>{
            if(e.charCodeAt(0)==32){
                newlist.push(e.slice(1,e.length))
            }
            else{
                newlist.push(e);
            }
            })
            newlist.map(e=>{
                var flag=0;
                reslist.map(enew=>{
                    if(enew==e){
                        flag=1;
                    }
                })
                if(flag==0){
                    reslist.push(e);
                }
            })
        })
        setResourcelist(reslist);
    }

    const onchange=(ev)=>{
        isreset=true
        radiusset=500;
        setRadius(500);
        setLatitude(ev.latLng.lat());
        setLongitude(ev.latLng.lng());
        setCLat(latitude);//center latitude
        setCLong(longitude);//center longitude
        getrad();
        getresourcefilter();

    }

    const reset=()=>{
        setCLat(20.5937);
        setCLong(78.9629);
        isreset=false
        radiusset=9999999999;
        setRadius(10000000000);
        locations=loc;
        setRadloc(loc);
        getrad();
    }


    const {isLoaded,loadError} = useLoadScript({
        googleMapsApiKey:"AIzaSyAoBXELbu5nZJghKxa-eTgsur8XsgOaHCM"
    });
    const mapRef=React.useRef();
    const onMapLoad=React.useCallback((map)=>{
        mapRef.current=map;
    },[]);
    if(loadError) return "Error";
    if(!isLoaded) return "Maps";
    
    return (
        <>
        <Header/>
        <div className="main-container">
            <div>
                <GoogleMap
                mapContainerClassName="mapcontainer"
                center={{lat:20.5937,lng:78.9629}}
                zoom={4}
                onLoad={onMapLoad}
                onClick={onchange}>
                    {
                        radloc.map(location=>{
                            return <MarkerF position={location.location}/>
                        })
                        
                    }
                    <MarkerF position={{lat:clat,lng:clong}} 
                    width="20px"
                    height="20px"/>


                </GoogleMap>
            </div>
            <div className="right">
                <button className="resetbtn" onClick={reset}>Get All Locations</button>
                <div className="places">
                    <label >Nearest state:{nearbylocstate}</label>
                    <label >Nearest city:{nearbyloccity}</label>
                </div>
                <div className="filterhead">
                    <label >Disaster Type:</label>
                    <label >Resource Type:</label>
                </div>
                <div className="filters">
                    <select value={disvalue} onChange={e=>{
                        disastervalue=e.target.value;
                        setDisvalue(e.target.value)
                        if(!isreset && e.target.value=="All"){
                            
                            getradall();
                        }
                        else if(isreset && e.target.value=="All"){
                            radiusset=500
                            setRadius(500)
                            getrad()
                        } 
                        
                        
                        else getdisfilter()
                        if(e.target.value!="All"){
                            setEnable(false);
                        }
                        else{
                            setEnable(true);
                        }
                        }}>
                        <option value="All">All</option>
                        {
                            disasterlist.map(disaster=>{
                                return <option value={disaster}>{disaster}</option>
                            })
                        }
                    </select>
                    <select disabled={!enable} value={resourcevalue} onChange={e=>{
                        resvalue=e.target.value;
                        setResourcevalue(e.target.value);
                        if(e.target.value=="All"){
                            if(!isreset){
                            
                                getradall();
                            }
                            else if(isreset){
                                radiusset=500
                                setRadius(500)
                                getrad()
                            } 
                            else
                            getdisfilter()
                        }
                        else 
                        changeresourcefilter();
                    }}>
                        <option>All</option>
                        {
                            resoucelist.map(resource=>{
                                return <option value={resource}>{resource}</option>
                            })
                        }
                    </select>
                </div>
                <div className="dtails-container">
                    <div className="detail">
                        {
                            radloc.map(detail=>{
                                return <Details name={detail.name} 
                                        phone={detail.phone}
                                        state={detail.state}
                                        city={detail.city}
                                        disaster={detail.disaster_type}
                                        resource={detail.resources_required}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}
export default MapComponent