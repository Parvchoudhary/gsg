import React from "react";
import ResponsiveAppBar from "../Navbar/Navbar";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import RocketIcon from '@mui/icons-material/Rocket';
import "./InvDashboard.css";
import { Button } from "@mui/material";
import profimg from "../../assets/prof.png";
import {Link,useNavigate} from "react-router-dom";

function InvDashboard() {
  return (
    <div style={{ overflow: "hidden" }}>
      <ResponsiveAppBar />
      <div className="sidebarcont">
        <div className="dashsideBar">
          <div className="sidebarcomp">
            <DashboardOutlinedIcon style={{ marginRight: "1rem" }} />
            Dashboard
          </div>
          <div className="sidebarcomp">
            <RocketIcon style={{ marginRight: "1rem" }} />
            <Link to="/investor/startuplist" style={{color:"#fff",textDecoration: "none",'&hover':{background: "#000"}}}>Startups</Link>
          </div>
          <div className="sidebarcomp">
            <MessageOutlinedIcon style={{ marginRight: "1rem" }} />
            Message
          </div>
          <div className="sidebarcomp">
            <Groups2OutlinedIcon style={{ marginRight: "1rem" }} />
            Co-founders
          </div>
          <div
            className="sidebarcomp"
            style={{ paddingTop: "12vw", color: "#FF3535" }}
          >
            <LogoutOutlinedIcon style={{ marginRight: "1rem" }} />
            Log-Out
          </div>
        </div>

        <div className="invcont">
          <div className="invdashTitle">
            <p>Hi John</p>
            <p
              style={{
                fontSize: "1.8rem",
                fontWeight: "700",
                marginTop: "-0.5%",
              }}
            >
              Welcome
            </p>
          </div>
              <div className="Brief&InvestmentsCont" style={{marginTop:"3%",display:"flex",flexDirection:"row"}}>
            <div className="invBrief">
                <img src={profimg} className="invProfile" />
                <div className="invInfo">
                <h2 style={{ fontSize: "1.2rem", marginTop: "-0.5%" }}>
                    Code Buddy
                </h2>

                <h4 style={{ fontSize: "1rem", marginTop: "-0.5%" }}>
                    Brief Information :
                </h4>

                <p style={{ fontSize: "0.9rem", marginTop: "-2%" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi egestas nam vitae tempus sit. Mauris euismod in turpis suscipit mi sagittis. Pharetra sapien tristique justo turpis dictum turpis nam aliquam ipsum. Neque purus lorem neque facilisis aliquam nec eget ullamcorper. Commodo eget proin erat aliquet massa.
                </p>
                </div>
                <Button
                variant="contained"
                style={{
                    position: "absolute",
                    background: "#1c1c1c",
                    height: "2rem",
                    width: "8%",
                    fontSize: "0.7rem",
                    marginLeft: "37%",
                }}
                >
                Edit Profile
                </Button>

                <div className="invStats">
                <div className="invStage">
                    <p>Sector</p>
                    <p
                    style={{
                        marginTop: "-14%",
                        fontSize: "1.5rem",
                        color: "#000",
                        fontWeight: 700,
                    }}
                    >
                    FinTech
                    </p>
                </div>
                <div className="division"></div>
                <div className="invStage">
                    <p>Stage</p>
                    <p
                    style={{
                        marginTop: "-14%",
                        fontSize: "1.5rem",
                        color: "#000",
                        fontWeight: 700,
                    }}
                    >
                    Series A
                    </p>
                </div>
                <div className="division"></div>
                <div className="invStage">
                    <p>Evaluation</p>
                    <p
                    style={{
                        marginTop: "-20%",
                        fontSize: "1.5rem",
                        color: "#000",
                        fontWeight: 700,
                    }}
                    >
                    2 Cr.
                    </p>
                </div>
                <div className="division"></div>
                <div className="invStage">
                    <p>Min. Ask</p>
                    <p
                    style={{
                        marginTop: "-22%",
                        fontSize: "1.5rem",
                        color: "#000",
                        fontWeight: 700,
                    }}
                    >
                    50K
                    </p>
                </div>
            </div>


         </div>
        
         <div className="investments">
                    <div className="investmentsTitle" style = {{fontSize:"1.5rem"}}>
                        Recent Investments
                    </div>
                    <div className="investmentsInfo">
                        <div className="investmentsProfImg"></div>
                        <div className="investmentsProfName" style = {{fontSize:"1rem",marginLeft:"4%",marginTop:"1%"}} >
                            Prakash Kumawat
                        </div>
                        <div className="investmentsProfDate" style={{fontSize:"1rem",marginLeft:"4%",marginTop:"1.2%",color: "#6F6F6F"}}>
                            Feb 12 2022
                        </div>
                        <div className="investmentsProfAmount" style={{fontSize:"1rem",marginLeft:"4%",marginTop:"1.2%",color: "#4D9762"}}>
                            $5000
                        </div>

                    </div>
                    <div className="investmentsInfo">
                        <div className="investmentsProfImg"></div>
                        <div className="investmentsProfName" style = {{fontSize:"1rem",marginLeft:"4%",marginTop:"1%"}} >
                            Prakash Kumawat
                        </div>
                        <div className="investmentsProfDate" style={{fontSize:"1rem",marginLeft:"4%",marginTop:"1.2%",color: "#6F6F6F"}}>
                            Feb 12 2022
                        </div>
                        <div className="investmentsProfAmount" style={{fontSize:"1rem",marginLeft:"4%",marginTop:"1.2%",color: "#4D9762"}}>
                            $5000
                        </div>

                    </div>
                    <div className="investmentsInfo">
                        <div className="investmentsProfImg"></div>
                        <div className="investmentsProfName" style = {{fontSize:"1rem",marginLeft:"4%",marginTop:"1%"}} >
                            Prakash Kumawat
                        </div>
                        <div className="investmentsProfDate" style={{fontSize:"1rem",marginLeft:"4%",marginTop:"1.2%",color: "#6F6F6F"}}>
                            Feb 12 2022
                        </div>
                        <div className="investmentsProfAmount" style={{fontSize:"1rem",marginLeft:"4%",marginTop:"1.2%",color: "#4D9762"}}>
                            $5000
                        </div>

                    </div>
                    <div className="investmentsInfo">
                        <div className="investmentsProfImg"></div>
                        <div className="investmentsProfName" style = {{fontSize:"1rem",marginLeft:"4%",marginTop:"1%"}} >
                            Prakash Kumawat
                        </div>
                        <div className="investmentsProfDate" style={{fontSize:"1rem",marginLeft:"4%",marginTop:"1.2%",color: "#6F6F6F"}}>
                            Feb 12 2022
                        </div>
                        <div className="investmentsProfAmount" style={{fontSize:"1rem",marginLeft:"4%",marginTop:"1.2%",color: "#4D9762"}}>
                            $5000
                        </div>

                    </div>
            </div>
            </div>
        
        
        
        </div>
      </div>
    </div>
  );
}

export default InvDashboard;
