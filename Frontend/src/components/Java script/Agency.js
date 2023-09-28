import React, { useEffect, useState } from 'react'
import "../css/Agency.css";
import axios from "axios";
import Header from './Header';
import { CookiesProvider, useCookies } from "react-cookie";
import {useNavigate} from 'react-router-dom'
export default function Agency() {  
    const navigate=useNavigate();
    const [rvis,setrvis]=useState("");
    const [rpos,setrpos]=useState("");
    const [lvis,setlvis]=useState("");
    const [lpos,setlpos]=useState("");
    const [log,setlog]=useState("");

    const [cookies, setCookie] = useCookies(["user"]);


    useEffect(()=>{
        setlvis("hidden");
        setlpos("absolute");
        setrvis("visible");
        setrpos("relative");
    },[])
    const changetol=()=>{
        setlvis("visible");
        setlpos("relative");
        setrvis("hidden");
        setrpos("absolute");
    }
    const changtor=()=>{
        setlvis("hidden");
        setlpos("absolute");
        setrvis("visible");
        setrpos("relative");
    }

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirm,setConfirm]=useState();

    const RegisterAgency=()=>{
        // alert(password+" "+confirm)
        if(password===confirm)
        {
            axios.post("http://localhost:4000/postLogin",{email:email,password:password})
            .then(res=>alert(res.data.Message));
        }
        else
        {
            alert("Please enter same password");
        }
    }

    const checkagency=()=>{
        axios.get("http://localhost:4000/getLogin")
        .then(res=>{
            var flag=0;
            res.data.map(agency=>{
                if(agency.email===email && agency.password===password){
                    flag=1;
                }
            })
            if(flag===1){
                alert("logged in successfully")
                setlog("loggedin")
                setCookie("user", "loggedin");
                navigate("/AgentMap");
            }
            else{
                alert("enter correct username and password")
            }
        })
    }

    return (
        <div>
            <Header status={log}/>
            
            <div class="loginDiv" id='loginDiv' style={{visibility:lvis,position:lpos}}>
                <h1>Login</h1>

                    <p>Please fill in this form to create an account.</p>
                    <hr/>
                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email"  required onChange={e=>setEmail(e.target.value)}/>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password"  name="psw" onChange={e=>setPassword(e.target.value)} required/>

                    <div class="clearfix">
                    <p>By creating an account you agree to our <a href="#" style={{ color: "dodgerblue" }}>Terms & Privacy</a>.</p>
                    <p style={{float:"right"}} onClick={changtor}>Haven't Registered yet? <a style={{ color: "dodgerblue" }}>SignUp</a>.</p>
                    </div>
                    <div class="clearfix">
                        <button id="signUpbtn" onClick={checkagency} class="signupbtn">Log in</button>
                    </div>
                    
                </div>
          
            
                <div class="SignUpDiv"  id='SignUpDiv' style={{visibility:rvis,position:rpos}}>
                    <h1>Registration</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr/>

                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" onChange={e=>setEmail(e.target.value)} required/>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" onChange={e=>setPassword(e.target.value)}  required/>

                    <label for="psw-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="repeat-password" name="psw-repeat" onChange={e=>setConfirm(e.target.value)} required />

                    <label>
                        <input type="checkbox" checked="checked" name="remember" style={{ margin: "15px" } }/> Remember me
                    </label>
                    <div class="clearfix">
                    <p>By creating an account you agree to our <a href="#" style={{ color: "dodgerblue" }}>Terms & Privacy</a>.</p>
                    <p style={{float:"right"}} onClick={changetol}>Already Registered <a style={{ color: "dodgerblue"}}>Login</a>.</p>
                    </div>
                    <div class="clearfix">
                        <button id="cancelbtn" type="button" class="cancelbtn">Cancel</button>
                        <button id="signUpbtn" onClick={RegisterAgency} class="signupbtn">Sign Up</button>
                    </div>
                </div>
                 
        </div>
    )
}