import React from 'react'
import axios from "axios";
import { useRef,useState } from "react";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import {Link,useNavigate} from "react-router-dom";

const HOST = "http://localhost:8000";



const InvestorForm = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
  
    const passwordref = useRef();
    const navigate = useNavigate();

    const handleSubmit =async(e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            alert("Passwords don't match");
        }
        else{
            try {
                
                const response = await fetch(`${HOST}/api/investor/register`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({name,email,password}) 
                  });
                  const json= await response.json();
                  if(json) {
                    console.log(json);
                    localStorage.setItem('userInfo',JSON.stringify(json));
                    navigate('/investor/dashboard');
                }
        
            } catch (error) {
                alert("User already exist, please go to login page");
                console.log(error);
            }
        }
    } 

  return (
    <div className="invform">
        <div className="formpage">
        <div className="formcontainer">
            <div className="leftformcontainer">
               
            </div>

            <div className="rightformcontainer">
            <div className="formstep">
            <TextField className="formitem formitem1" id="outlined-basic" label="Full Name" variant="outlined" onChange={(e) => setName(e.target.value)}/>
            <TextField className="formitem formitem1" id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)}/>
            <TextField className="formitem" id="outlined-basic" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)}/>
            <TextField className="formitem" id="outlined-basic" label="Confirm Password" variant="outlined" onChange={(e) => setConfirmPassword(e.target.value)}/>
            </div>
            <div className="btndiv">
                <Button  variant="contained"
                    style={{marginLeft:"0rem",backgroundColor:"#4D9762"}}>
                    <Link to="/investor/dashboard" style={{color:"#fff",textDecoration: "none"}}>Submit</Link>
                </Button>          
            </div>
            
            </div>
        </div>
    </div>
    </div>
  )
}

export default InvestorForm