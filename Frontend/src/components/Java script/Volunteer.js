import React, { useEffect, useState } from 'react'
import "../css/Volunteer.css";
import axios from 'axios'
export default function Volunteer() {
       const [visibility,setVisibility]=useState("");
       const [oneposition,setOneposition]=useState("")
       const [secondposition,setSecondposition]=useState("")
       const [datavisibility,setDataVisibility]=useState("")
       const [disasterData,setDisasterData]=useState([])
       useEffect(()=>{
        setVisibility("visible");
        setDataVisibility("hidden");
        setOneposition("relative");
        axios.get("http://localhost:4000/getreportdata")
        .then(res=>{
            setDisasterData(res.data)
        })
       },[])
    return (

        <div class="reg_volunteer">
        <div className='left_rightdiv'>
            {/* <div class="leftDiv" id='leftDiv'>
                <h5>Become Volunteer</h5>
            </div> */}
            <button class="leftDiv" id='leftDiv' onClick={()=>{setVisibility("visible");setDataVisibility("hidden");setOneposition("relative")}}>Search Disasters</button>

            {/* <div >
            <h5>Search Disasters</h5>
            </div> */}
            <button class="rightDiv" id='rightDiv' onClick={()=>{setVisibility("hidden");setDataVisibility("visible");setOneposition("absolute")}}>Search Disasters</button>
            </div>
            <div class="VolunteerReg" id='VolunteerReg' style={{visibility:visibility}}>
                <form style={{position:oneposition}}>
                    <div class="row">
                        <div class="col-25">
                            <label for="fname">First Name</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="lname">Last Name</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="lName" name="lName" required></input>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="country">State</label>
                        </div>
                        <div class="col-75">
                            <select id="country" name="country">
                                <option value="australia">Uttar Pradesh</option>
                                <option value="canada">Punjab</option>
                                <option value="usa">Andrapradesh</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="subject">Subject</label>
                        </div>
                        <div class="col-75">
                            <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "200px" }}></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <input type="submit" value="Submit"></input>
                    </div>
                </form>
                <div style={{visibility:datavisibility}}>
                    {
                        disasterData.map(e=>{
                            return <div className="detail-container">
                                <label>Name : {e.name}</label>
                                <label>Phone Number : {e.phone}</label>
                                <label>Disaster Type : {e.disaster_type}</label>
                                <label>Address : {e.address}</label>
                                <label>State : {e.state}</label>
                                <label>City : {e.city}</label>
                            </div>

                        })
                    }
                </div>

            </div>
        </div>
    )
}
