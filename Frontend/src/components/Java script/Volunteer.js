import React from 'react'
import "../css/Volunteer.css";
export default function Volunteer() {
    return (
        <div>
            <div class="TOpDiv">
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
                            <label for="country">Country</label>
                        </div>
                        <div class="col-75">
                            <select id="country" name="country">
                                <option value="australia">Australia</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
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
                        <button type="submit" value="Submit"></button>
                    </div>
                </form>
            </div>
    </div>
)
}
