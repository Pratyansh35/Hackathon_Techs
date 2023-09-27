import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios"; 
import "../css/Form.css";
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
export default function Form() {

  const navigate=useNavigate();
  const [userLocation, setUserLocation] = useState({
    lat: 0,
    lng: 0,
  });

  const [locationInfo, setLocationInfo] = useState({
    city: "",
    state: "",
    country: "",
  });

  const [name,setName]=useState("");
  const [phone,setPhone]=useState();
  const [address,setAddress]=useState("");
  const [disaster_type,setdistype]=useState("");



  useEffect(() => {
    setdistype("select");
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });

        // Call the reverse geocoding function with the coordinates
        reverseGeocode(position.coords.latitude, position.coords.longitude);
      });
    }
  }, []);


  const reverseGeocode = async (lat, lng) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyAoBXELbu5nZJghKxa-eTgsur8XsgOaHCM`
      );

      console.log("Geocoding response:", response.data);
      const locationData = response.data.results[0];
      let city = "";
      let state = "";
      let country = "";

      // Extract city, state, and country from the address components
      locationData.address_components.forEach((component) => {
        if (component.types.includes("locality")) {
          city = component.long_name;
        } else if (component.types.includes("administrative_area_level_1")) {
          state = component.long_name;
        } else if (component.types.includes("country")) {
          country = component.long_name;
        }
      });

      console.log("Extracted Location Info - City:", city, "State:", state, "Country:", country);

      setLocationInfo({ city, state, country });
    } catch (error) {
      console.error("Error fetching location information:", error);
    }
  };

  // const validate=()=>{
  //   if(name==="" || phone===NULL || address==="" || disaster_type==="select")
  // }
  const savedata=async()=>{
    // alert("hell")
        try {
            const city="Jalandhar";
            const state="Punjab";
            await axios.post("http://localhost:4000/fileuserreport",{
              name:name,
              phone:phone,
              address:address,
              disaster_type:disaster_type,
              lat:userLocation.lat,
              lng:userLocation.lng,
              city:city,
              state:state
            })
            .then(res=>
              {
                alert(res.data.message)
                navigate("/")
            }
            )
          
        } catch (error) {
          console.error(error)
        }  
  }

  return (
    <div>


      <div className="container1">
        <div className="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAoBXELbu5nZJghKxa-eTgsur8XsgOaHCM",
            }}
            center={{lat:20.5937,lng:78.9629}}
            zoom={5}
          >
            <Marker
              lat={userLocation.lat}
              lng={userLocation.lng}
              text="Your Location"
            />
          </GoogleMapReact>
        </div>
        



        <div className="location-info">
              <div className="Name">
                <label>Name : </label>
                <input type="text" required onChange={e=>setName(e.target.value)}/>
              </div>
              <div>
                <label>Phone Number : </label>
                <input type="tel" required onChange={e=>setPhone(e.target.value)}/>
              </div>
              <div>
                <label>Address : </label>
                <input type="text" required onChange={e=>setAddress(e.target.value)}/>
              </div>
              <div>
                <label>Disaster Type : </label>
                <select onChange={e=>setdistype(e.target.value)}>
                  <option value="select">select</option>
                  <option value="cyclone">Cyclone</option>
                  <option value="EarthQuake">EarthQuake</option>
                  <option value="Floods">Floods</option>
                  <option value="WildFire">WildFire</option>
                  <option value="LandSlides">LandSlides</option>
                </select>
              </div>
              <div className="location-info" id='location'>
                <label>Location Information : </label>
                <label>{userLocation.lat} , {userLocation.lng}</label><br></br>
                <label>City : Phagwara</label><br></br>
                <label>State : Punjab</label>
              </div>
              {/* <Link to="/"><button onClick={savedata}>Submit</button></Link> */}
              <button onClick={()=>{
                (name==="" || phone==="" || address==="" || disaster_type==="select")?
                alert("enter all fields"):
                savedata()
              }
                }>Submit</button>
        </div>


      </div>
    </div>
  );
}

const Marker = ({ text }) => (
  <div className="marker">
    {text}
  </div>
);
