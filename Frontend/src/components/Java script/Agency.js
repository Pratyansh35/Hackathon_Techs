import React from 'react'
import "../css/Agency.css"

var sg = document.getElementById("SignUpDiv");
var lg = document.getElementById("loginDiv");
export default function Agency() {
    // function signUp() {
    //     sg.style.visibility = "visible";
    //     lg.style.visibility = "hidden";
    // }
    
    function loginpg() {
        sg.style.visibility = "hidden";
        lg.style.visibility = "visible";
    }
    return (
        <div>
            
            <form action="action_page.php">
                <div class="loginDiv" id='loginDiv'>
                    falfaf
                </div>



                <div class="SignUpDiv" id='SignUpDiv'>
                    <h1>Registration</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr/>

                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required/>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>

                    <label for="psw-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>

                    <label>
                        <input type="checkbox" checked="checked" name="remember" style={{ margin: "15px" } }/> Remember me
                    </label>
                    <div class="clearfix">
                    <p>By creating an account you agree to our <a href="#" style={{ color: "dodgerblue" }}>Terms & Privacy</a>.</p>
                    <p style={{float:"right"}}>Already Registered <a onClick={loginpg} style={{ color: "dodgerblue" }}>Login</a>.</p>
                    </div>
                    <div class="clearfix">
                        <button id="cancelbtn" type="button" class="cancelbtn">Cancel</button>
                        <button id="signUpbtn"type="submit" class="signupbtn">Sign Up</button>
                    </div>
                </div>
                </form> 
        </div>
    )
}
