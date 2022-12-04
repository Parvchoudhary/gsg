import img3 from "../../assets/landingdevelopert.png";
import img2 from "../../assets/landingimg.png";
import img1 from "../../assets/landingstartup.png";

import img3btm from "../../assets/landingdeveloperb.png";
import img2btm from "../../assets/landingimgb.png";
import img1btm from "../../assets/landingstartupb.png";

import "./Homepage.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

function HomePage() {
  const roles = [
    [img1, img1btm,  "Trade Your Startup And ", "Gift Cards!" ,"We trade startup, gift cards and electronic assets.",0,"/startup/register"],
    [img2, img2btm,  "Trade Your Investor And ", "Gift Cards!", "We trade investor, gift cards and electronic assets.",1,"/investor/register"],
    [img3, img3btm,  "Trade Your Developer And ", "Gift Cards!", "We trade developer, gift cards and electronic assets.",2,""],
  ];

  const [userRole, setUserRole] = useState(roles[0]);

  return (
    <div className="homepage">
      <div className="landCont">
        <div className="landTitle">You're A</div>
        <Button
          onClick={() => {
            setUserRole(roles[0]);
          }}
          style={{ marginLeft: "0rem", 
                    background: userRole[5] === 0 ? "#000000" : "",
                    color : userRole[5] === 0 ? "#fff" : "#000", 
                    border:"none",
                    fontWeigth:"1000" }}
          variant={userRole[5] === 0 ? "contained":"outlined"}
        >
          Startup
        </Button>
        <Button
          onClick={() => {
            setUserRole(roles[1]);
          }}
          style={{ marginLeft: "0.5rem",border:"none", color : userRole[5] === 1 ? "#fff" : "#000",
          background: userRole[5] === 1 ? "#000000" : "" }}
          variant={userRole[5] === 1 ? "contained":"outlined"}
        >
          Investor
        </Button>
        <Button
          onClick={() => {
            setUserRole(roles[2]);
          }}
          style={{ marginLeft: "0.5rem",border:"none",color : userRole[5] === 2 ? "#fff" : "#000",
          background: userRole[5] === 2 ? "#000000" : "" }}
          variant={userRole[5] === 2 ? "contained":"outlined"}
        >
          Developer
        </Button>
        <br />
        <div className="landBox">
          <div className="landDesc">
            <p>
              {userRole[2]}{" "}
              <span style={{ color: "#4D9762" }}> {userRole[3]} </span>{" "}
            </p>
          </div>
          <div className="landtxt">
            <p>{userRole[4]}</p>
          </div>
          <Button className="landBtn" variant ='contained' 
          style={{background: "#4D9762", marginLeft: "-5rem",fontWeight: "500",width:"8%",heigth:"6%",
                  fontSize: "0.9rem",
                  lineHeight: "27px" }}>
                    <Link to={userRole[6]} style={{color:"#fff",textDecoration: "none"}}>Sign Up</Link>
            
          </Button>
          <Button className="landBtn" variant="outlined" style={{color:"#000", borderColor:"#000", 
                  marginLeft: "2rem",fontWeight: "500",width:"8%",heigth:"6%",
                  fontSize: "0.8rem",
                  lineHeight: "27px" }}>
            Explore
          </Button>
        </div>
        <img src={userRole[0]} className="roleimg roleimgtop" />
        <img src={userRole[1]} className="roleimg roleimgbtm" />
      </div>
    </div>
  );
}

export default HomePage;
