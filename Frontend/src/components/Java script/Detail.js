import React from "react";
import '../css/Details.css'
function Details(props){
    return(
        <div className="details-container">
            <label>Name : {props.name}</label>
            <label>Phone Number : {props.phone}</label>
            <label>State : {props.state}</label>
            <label>City : {props.city}</label>
            <label>Disaster Type : {props.disaster}</label>
            <label>Resources Required : {props.resource}</label>
        </div>
    )
}
export default Details