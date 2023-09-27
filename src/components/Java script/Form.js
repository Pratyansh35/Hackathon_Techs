import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios"; 
import "../css/Form.css";

export default function Form() {
  const [userLocation, setUserLocation] = useState({
    lat: 0,
    lng: 0,
  });

  const [locationInfo, setLocationInfo] = useState({
    city: "",
    state: "",
    country: "",
  });

  useEffect(() => {
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

  return (
    <div>


      <div className="container1">
        <div className="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAoBXELbu5nZJghKxa-eTgsur8XsgOaHCM",
            }}
            center={userLocation}
            zoom={17}
          >
            <Marker
              lat={userLocation.lat}
              lng={userLocation.lng}
              text="Your Location"
            />
          </GoogleMapReact>
        </div>
        



        <div className="location-info">
        <form id="form">

        <label for="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" required></input>

        <br></br>
        
        <label for="disasterType">Type of Disaster:</label>
        <select id="disasterType" name="disasterType" required>
            <option value="" disabled selected>Select a Disaster Type</option>
            <option value="Earthquake">Earthquake</option>
            <option value="Flood">Flood</option>
            <option value="Wildfire">Wildfire</option>
            <option value="Cyclone">Cyclone</option>
            <option value="Landslides">Landslide</option>
        </select>

       <br></br>
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" required pattern="[0-9]{10}" placeholder="1234567890"></input>
       
    
          <h2>Location Information</h2>
          <p>Latitude: {userLocation.lat}</p>
          <p>Longitude: {userLocation.lng}</p>
          <p>City: {locationInfo.city}</p>
          <p>State:{locationInfo.sate}</p>
        
         <button type="submit">Submit</button>

        </form>

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
