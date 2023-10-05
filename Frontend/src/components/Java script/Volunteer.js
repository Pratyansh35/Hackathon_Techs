import React, { useEffect, useState } from 'react'
import "../css/Volunteer.css";
import axios from 'axios'
import Header from './Header';
import Footer from './footers';
export default function Volunteer() {
       const [visibility,setVisibility]=useState("");
       const [oneposition,setOneposition]=useState("")
       const [secondposition,setSecondposition]=useState("")
       const [datavisibility,setDataVisibility]=useState("")
       const [dataheight,setdataheight]=useState("")
       const [disasterData,setDisasterData]=useState([])
       useEffect(()=>{
        setVisibility("visible");
        setDataVisibility("hidden");
        setOneposition("relative");
        setSecondposition("absolute");
        setdataheight("0px");
        axios.get("http://localhost:4000/getagencydetails")
        .then(res=>{
            setDisasterData(res.data)
        })
       },[])
    return (
        <>
        <Header/>
        <div class="reg_volunteer">
        <div className='left_rightdiv'>
            {/* <div class="leftDiv" id='leftDiv'>
                <h5>Become Volunteer</h5>
            </div> */}
            <button class="leftDiv" id='leftDiv' onClick={()=>{setVisibility("visible");setDataVisibility("hidden");setSecondposition("absolute");setOneposition("relative");setdataheight("0px");}}>Volunteer Registration</button>

            {/* <div >
            <h5>Search Disasters</h5>
            </div> */}
            <button class="rightDiv" id='rightDiv' onClick={()=>{setVisibility("hidden");setDataVisibility("visible");setSecondposition("relative");setOneposition("absolute");setdataheight("fit-content");}}>View Disasters</button>
            </div>
            <div class="VolunteerReg" id='VolunteerReg' style={{visibility:visibility}}>
                <form style={{position:oneposition}}>
                    <div class="row">
                        <div class="col-25">
                            <label for="fname">First Name</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="fname" name="firstname" placeholder="Your First name.."></input>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="lname">Last Name</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="lName" name="lName" required placeholder="Your Last name.."></input>
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
                <div style={{visibility:datavisibility,position:secondposition,height:dataheight}}>
                    {
                        disasterData.map(e=>{
                            return <div className="detail-container">
                                <label>Agency Name : {e.agencyname}</label>
                                <label>City : {e.city}</label>
                                <label>State : {e.state}</label>
                                <label>Address : {e.address}</label>
                                <label>Expertise : {
                                    e.specializedarea.map(e1=>{
                                        return <label>{e1}</label>
                                    })
                                    }</label>
                                <label>Resources : {
                                    e.resources.map(resource=>{
                                        return <div>
                                            <label>Type : {resource.resourcetype}</label>
                                            <label>Volunteers Required : {Math.round(Math.random()*10)}</label>
                                        </div>
                                    })
                                    }</label>
                                <button>Assist</button>
                            </div>

                        })
                    }
                </div>

            </div>
        </div>
        <Footer/>
        </>
    )
}
