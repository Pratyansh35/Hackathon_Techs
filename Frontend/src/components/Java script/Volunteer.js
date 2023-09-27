import React from 'react'
import "../css/Volunteer.css";
var v = document.getElementById("VolunteerReg");
var i = document.getElementById("leftDiv");
var r = document.getElementById("rightDiv");
export default function Volunteer() {
        function BecomeVol() {
        i.style.border = "2px solid black";
        r.style.border = "none";
        v.style.visibility = "visible";
    }
    function regVol() {
        r.style.border = "2px solid black";
        i.style.border = "none";
        v.style.visibility = "hidden";
    }
    return (

        <div class="reg_volunteer">
        <div className='left_rightdiv'>
            <div class="leftDiv" id='leftDiv' onClick={BecomeVol}>
                <h5>Become Volunteer</h5>
            </div>
            <div class="rightDiv" id='rightDiv' onClick={regVol}>
            <h5>Search Disasters</h5>
            </div>
            </div>
            <div class="VolunteerReg" id='VolunteerReg' style={{visibility: "visible"}}>
                <form action="action_page.php">
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
            </div>
        </div>
    )
}
