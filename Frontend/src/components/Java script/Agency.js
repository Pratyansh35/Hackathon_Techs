import React, { useEffect, useState } from 'react'
import "../css/Agency.css"


export default function Agency() {
    const [rvis, setrvis] = useState("");
    const [rpos, setrpos] = useState("");
    const [lvis, setlvis] = useState("");
    const [lpos, setlpos] = useState("");
    useEffect(() => {
        setlvis("hidden");
        setlpos("absolute");
        setrvis("visible");
        setrpos("relative");
    }, [])
    const changetol = () => {
        setlvis("visible");
        setlpos("relative");
        setrvis("hidden");
        setrpos("absolute");
    }
    const changtor = () => {
        setlvis("hidden");
        setlpos("absolute");
        setrvis("visible");
        setrpos("relative");
    }


return (
    <div>
        <div class="loginDiv" id='loginDiv' style={{ visibility:lvis, position:lpos}}>
            <h1>Login</h1>
            <p>Please fill in this form to Login</p>
            <hr/>
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required />

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />

            <div class="clearfix">
                <p>By Logging an account you agree to our <a href="#" style={{ color: "dodgerblue" }}>Terms & Privacy</a>.</p>
                <p style={{ float: "right" }} onClick={changtor}>Haven't Registered yet? <a style={{ color: "dodgerblue" }}>SignUp</a>.</p>
            </div>
            <div class="clearfix">
                <button id="cancelbtn" type="button" class="cancelbtn">Cancel</button>
                <button id="signUpbtn" type="submit" class="signupbtn">Log in</button>
            </div>

        </div>

        <div class="SignUpDiv" id='SignUpDiv' style={{ visibility: rvis, position: rpos }}>
            <h1>Registration</h1>

            <p>Please fill in this form to create an account.</p>
            <hr />

            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required />

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />

            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

            <label>
                <input type="checkbox" checked="checked" name="remember" style={{ margin: "15px" }} /> Remember me
            </label>
            <div class="clearfix">
                <p>By creating an account you agree to our <a href="#" style={{ color: "dodgerblue" }}>Terms & Privacy</a>.</p>
                <p style={{ float: "right" }} onClick={changetol}>Already Registered <a style={{ color: "dodgerblue" }}>Login</a>.</p>
            </div>
            <div class="clearfix">
                <button id="cancelbtn" type="button" class="cancelbtn">Cancel</button>
                <button id="signUpbtn" type="submit" class="signupbtn">Sign Up</button>
            </div>
        </div>
    </div>
)
}