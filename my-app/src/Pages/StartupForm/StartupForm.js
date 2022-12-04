import React from 'react'
import "./StartupForm.css"
import vertline from "../../assets/formvertline.svg";
import formdone from "../../assets/formdone.png"
import formlogo from "../../assets/formlogo.svg"
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import {Link,useNavigate} from "react-router-dom";

const HOST = "http://localhost:8000";



const StartupForm = () => {


    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [marketcap,setMarketcap] = useState(0);
    const [stage,setStage] = useState("");
    const [description,setDescription] = useState("");
    const [category,setCategory] = useState("");
    const [dilutedEquity,setDilutedEquity] = useState(0);
    const [investorCount,setInvestorCount] = useState(0);





    const [activeStep,setActiveStep] = useState(0);
    const stepContent = ["Step1","Step2","Step3","Step4"];
    const [isDone,setDone] = useState([0,0,0,0]);

    function handleNext(){
        setActiveStep(activeStep+1);
        let isDoneArray = activeStep === 0 ? [1,0,0,0] : activeStep === 1 ? [1,1,0,0] : activeStep === 2 ? [1,1,1,0] : [1,1,1,1]
        setDone(isDoneArray)
    }

    function handleBack() {
        
        let isDoneArray = activeStep === 1 ? [0,0,0,0] : activeStep === 2 ? [1,0,0,0] : activeStep === 3 ? [1,1,0,0] : [1,1,1,0]
        setActiveStep(activeStep-1);
        setDone(isDoneArray);
    }

    const handleSubmit =async(e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${HOST}/api/startup/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name,email,password,marketcap,stage,description,category,dilutedEquity,investorCount}) 
                });
                const json= await response.json();
                console.log(json);
                if(json) {
                localStorage.setItem('userInfo',json.token);
                // navigate('/');
            }
    
        } catch (error) {
            alert("User already exist, please go to login page");
            console.log(error);
        }
        
    } 


    // const Forms = [
    //     <div className="formstep">
    //         <TextField className="formitem" id="outlined-basic" onChange={(e) => setName(e.target.value)} label="Name of company" variant="outlined" defaultValue={"gv"}/>
    //         <TextField className="formitem" id="outlined-basic" onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined" />
    //         <TextField className="formitem" id="outlined-basic" onChange={(e) => setPassword(e.target.value)} label="Password" variant="outlined" />
    //         <TextField className="formitem" id="outlined-basic" label="Location" variant="outlined" />
    //     </div>,
    //     <div className="formstep">
    //         <TextField className="formitem" id="outlined-basic" onChange={(e) => {setDescription(e.target.value);console.log(name)}} label="Brief Introduction" variant="outlined" defaultValue={"gv"}/>
    //         <TextField className="formitem" id="outlined-basic" onChange={(e) => setStage(e.target.value)} label="Investmemt Stage" variant="outlined" />
    //         <TextField className="formitem" id="outlined-basic" onChange={(e) => setCategory(e.target.value)} label="Category" variant="outlined" />
    //         <TextField className="formitem" id="outlined-basic" onChange={(e) => setMarketcap(e.target.value)} label="Current valuation" variant="outlined" />
    //     </div>,
    //     <div className="formstep">
    //         <TextField className="formitem" id="outlined-basic" label="Founding member 1" variant="outlined" />
    //         <TextField className="formitem" id="outlined-basic" label="Founding member 2" variant="outlined" />
    //         <TextField className="formitem" id="outlined-basic" label="Founding member 3" variant="outlined" />
    //         <TextField className="formitem" id="outlined-basic" label="Founding member 4" variant="outlined" />
    //     </div>,
    //     <div className="formstep">
    //         <TextField className="formitem" id="outlined-basic" label="Investor 1" variant="outlined" />
    //         <TextField className="formitem" id="outlined-basic" label="Investor 2" variant="outlined" />
    //         <TextField className="formitem" id="outlined-basic" label="Investor 3" variant="outlined" />
    //         <TextField className="formitem" id="outlined-basic" label="Investor 4" variant="outlined" />
    //     </div>
    // ]




  return (
    <div className="formpage">
        <div className="formcontainer">
            <div className="leftformcontainer">
                <img src={vertline} className="vertline"/>
                <div className="formlist" > 
                    <div className="listobj" onClick={() => {setActiveStep(0);}}>
                        <img src={isDone[0] ? formdone : formlogo} />
                        <h3 className="stepText" style={{color:activeStep^0 ?"#000":"#4D9762"}} > {stepContent[0]}</h3>
                    </div>
                    <div className="listobj" onClick={() => {setActiveStep(1);}}>
                        <img src={isDone[1] ? formdone : formlogo} />
                        <h3 className="stepText" style={{color:activeStep^1 ?"#000":"#4D9762"}}> {stepContent[1]}</h3>
                    </div>
                    <div className="listobj" onClick={() => {setActiveStep(2);}}>
                        <img src={isDone[2] ? formdone : formlogo} />
                        <h3 className="stepText" style={{color:activeStep^2 ?"#000":"#4D9762"}}> {stepContent[2]}</h3>
                    </div>
                    <div className="listobj" onClick={() => {setActiveStep(3);}}>
                        <img src={isDone[3] ? formdone : formlogo} />
                        <h3 className="stepText" style={{color:activeStep^3 ?"#000":"#4D9762"}}> {stepContent[3]}</h3>
                    </div>
                </div>
            </div>

            <div className="rightformcontainer">

                {  activeStep^0?<></>:
                    <div className="formstep">
                        <TextField className="formitem" id="outlined-basic" onChange={(e) => setName(e.target.value)} label="Name of company" variant="outlined"/>
                        <TextField className="formitem" id="outlined-basic" onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined" />
                        <TextField className="formitem" id="outlined-basic" onChange={(e) => setPassword(e.target.value)} label="Password" variant="outlined" />
                        <TextField className="formitem" id="outlined-basic" label="Location" variant="outlined" />
                    </div>
                }
                {  activeStep^1?<></>:
                    <div className="formstep">
                        <TextField className="formitem" id="outlined-basic" onChange={(e) => setDescription(e.target.value)} label="Brief Introduction" variant="outlined"/>
                        <TextField className="formitem" id="outlined-basic" onChange={(e) => setStage(e.target.value)} label="Investmemt Stage" variant="outlined" />
                        <TextField className="formitem" id="outlined-basic" onChange={(e) => setCategory(e.target.value)} label="Category" variant="outlined" />
                        <TextField className="formitem" id="outlined-basic" onChange={(e) => setMarketcap(e.target.value)} label="Current valuation" variant="outlined" />
                    </div>
                }
                {  activeStep^2?<></>:
                    <div className="formstep">
                        <TextField className="formitem" id="outlined-basic" label="Founding member 1" variant="outlined" />
                        <TextField className="formitem" id="outlined-basic" label="Founding member 2" variant="outlined" />
                        <TextField className="formitem" id="outlined-basic" label="Founding member 3" variant="outlined" />
                        <TextField className="formitem" id="outlined-basic" label="Founding member 4" variant="outlined" />
                    </div>
                }
                { activeStep^3?<></>:
                    <div className="formstep">
                        <TextField className="formitem" id="outlined-basic" label="Investor 1" variant="outlined" />
                        <TextField className="formitem" id="outlined-basic" label="Investor 2" variant="outlined" />
                        <TextField className="formitem" id="outlined-basic" label="Investor 3" variant="outlined" />
                        <TextField className="formitem" id="outlined-basic" label="Investor 4" variant="outlined" />
                    </div>
                }
                <div className="btndiv">
                    {
                        activeStep ?
                            <Button onClick={handleBack} 
                                    variant="outlined"
                                    style={{color:"#4D9762"}}
                                    >
                                Back
                            </Button>
                            :<></>
                    }       
                    {
                        activeStep !== 3 ?
                            <Button 
                                onClick={handleNext} 
                                variant="contained"
                                style={{marginLeft: activeStep === 0 ? "0rem":"1.5rem",backgroundColor:"#4D9762"}}>
                                Next
                            </Button>
                            :
                            <Button variant="contained"
                                style={{marginLeft:"1.5rem",backgroundColor:"#4D9762"}}>
                                <Link to="/startup" style={{color:"#fff",textDecoration: "none"}}>Submit</Link>
                            </Button>
                    }            
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default StartupForm