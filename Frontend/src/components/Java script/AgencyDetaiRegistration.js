import React, { useEffect, useState } from 'react'
import '../css/AgencyRegister.css'
import axios from 'axios';
const AgencyForm=()=>{

    // var specarr=[];
    // var i=0;
    const [resourcearray,setResourcearray]=useState([]);
    const [specarea,setSpecarea]=useState([]);
    const [type,setType]=useState("");
    const [count,setCount]=useState("");
    const [man,setMan]=useState("");

    const [agencyname,setagencyname]=useState("");
    const [city,setcity]=useState("")
    const [state,setstate]=useState("")
    const [address,setaddress]=useState("")


    const [userLocation, setUserLocation] = useState({
        lat: 0,
        lng: 0,
      });

    const addspec=e=>{
        var flag=0;
        specarea.forEach(res => {
            if(res==e.target.value){
                flag=1;
            }
        });
        if(flag==0 && e.target.value!=="select"){
            // specarr.push(current=>[...current,e.target.value]);
            // specarr[i]=e.target.value;
            // i++;
            // console.log(specarr)
            setSpecarea(current => [...current,e.target.value]);
            console.log(specarea)
        }
    }

    useEffect(()=>{
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
              setUserLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
      
            });
          }
    },[])
    const savedata=()=>{
        axios.post("http://localhost:4000/addagency",{
        agencyname:agencyname,
        location:userLocation,
        city:city,
        state:state,
        address:address,
        specializedarea:specarea,
        resources:resourcearray
        })
        .then(res=>{
            alert(res.data.message)
        })
    }
    const addresource=()=>{
        const obj={
            resourcetype:type,
            count:count,
            manpower:man
        }
        setResourcearray(current => [...current,obj]);
    }
    return (
        <div>
            
                    <div>
                        <label>Agency Name : </label>
                        <input type="text" required onChange={e=>setagencyname(e.target.value)}/>
                    </div>
                    <div>
                        <label>City : </label>
                        <input type='text' onChange={e=>setcity(e.target.value)}/>
                    </div>
                    <div>
                        <label>State : </label>
                        <input type='text' onChange={e=>setstate(e.target.value)}/>
                    </div>
                    <div>
                        <label>Address : </label>
                        <input type='text' required onChange={e=>setaddress(e.target.value)}/>
                    </div>
                    <div>
                        <label>Specialized Area : </label>
                        <div className='upcon'>
                            <select onChange={addspec}>
                            <option value="select">select</option>
                            <option value="cyclone">Cyclone</option>
                            <option value="EarthQuake">EarthQuake</option>
                            <option value="Floods">Floods</option>
                            <option value="WildFire">WildFire</option>
                            <option value="LandSlides">LandSlides</option>
                            </select>
                            <div className='spec-container'>
                            {
                                specarea.map(item=>{
                                    return <div>
                                        {item}
                                    </div>
                                })
                            }
                            </div>
                        </div>
                    </div>
                    <div>
                        <label>Resources</label>
                        <div className='resource-container'>
                            <input type='text' placeholder='type' onChange={e=>setType(e.target.value)}/>
                            <input type='text' placeholder='count' onChange={e=>setCount(e.target.value)}/>
                            <input type='text' placeholder='manpower' onChange={e=>setMan(e.target.value)}/>
                            <button onClick={addresource}>+</button>
                        </div>
                        <div>
                            {
                                resourcearray.map(res=>{
                                    return <div>
                                        <label>{res.resourcetype}</label>
                                        <label>{res.count}</label>
                                        <label>{res.manpower}</label>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <button onClick={savedata}>Submit</button>
                    </div>
            
        </div>
    )
}

export default AgencyForm
