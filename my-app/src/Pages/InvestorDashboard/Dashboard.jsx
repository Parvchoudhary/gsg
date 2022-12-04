import React from "react";
import "./Dashboard.css";
import Button from "@mui/material/Button"
import {useEffect} from 'react';
import {Link,useNavigate} from "react-router-dom";
import axios from "axios";
import { useState } from "react";


import startups from "./st.json"

const HOST = "http://localhost:8000";


function Dashboard() {

  const navigate = useNavigate();
  // const [startups,setStartups] = useState([]);


  const fetchAllStartups = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        }
      };

      const startups = await axios.get(`${HOST}/api/startup/allstartups`, config);

      console.log(startups.data);
      // setStartups(startups.data);


    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  }

  
  var userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {

    // userInfo = JSON.parse(localStorage.getItem("userInfo"));
    // console.log(userInfo)
    // if (localStorage.getItem("userInfo") === null) {
    //   navigate("/investor/register");
    // }


    // fetchAllStartups();
    console.log(startups);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]) 


  return (
    <div className="dashCont">
      {/* {userInfo?.name} */}
      <div className="dashGrid">
        <div className="dashCard">
          <div className="dashprof">
            <div className="dashProfile"></div>
            <div className="dashName">
              <p>{startups[0]?.name}</p>
              <div className="dashTagCont">
                <div className="dashTags">{startups[0]?.category}</div>
              </div>
            </div>
          </div>

          <div className="dashDesc">
            <strong>Our Idea </strong> is, {startups[0]?.description}
          </div>

          <div className="dashStats">
            <div className="stage">
              <p>Stage</p>
              <p
                style={{
                  marginTop: "-15%",
                  fontSize: "1.5rem",
                  color: "#000",
                  fontWeight: 700,
                }}
              >
                {startups[0]?.stage}
              </p>
            </div>
            <div className="statsPartition"></div>
            <div className="stage">
              <p>Evaluation</p>
              <p
                style={{
                  marginTop: "-23%",
                  fontSize: "1.5rem",
                  color: "#000",
                  fontWeight: 700,
                }}
              >
                {startups[0]?.marketcap} Cr.
              </p>
            </div>
            <div className="statsPartition"></div>
            <div className="stage">
              <p>Min. Ask</p>
              <p
                style={{
                  marginTop: "-26%",
                  fontSize: "1.5rem",
                  color: "#000",
                  fontWeight: 700,
                }}
              >
                50K
              </p>
            </div>
          </div>
          <div className="dashBtn"> 
            <Button
                variant="contained"
                sx={{ background: "#000" ,fontFamily: "Nunito Sans",
                fontStyle: "normal"}}
                
            >Read More</Button>
          </div> 
        </div>
        
        <div className="dashCard">
          <div className="dashprof">
            <div className="dashProfile"></div>
            <div className="dashName">
              <p>Bugginator</p>
              <div className="dashTagCont">
                <div className="dashTags">FinTech</div>

              </div>
            </div>
          </div>

          <div className="dashDesc">
            <strong>Our Idea </strong> is, Indianopolis, USAIndianopolis,
            USAIndianopolis, USAIndianopolis, USAIndianopolis, USAIndianopolis,
            USAIndianopolis
          </div>

          <div className="dashStats">
            <div className="stage">
              <p>Stage</p>
              <p
                style={{
                  marginTop: "-18%",
                  fontSize: "1.5rem",
                  color: "#000",
                  fontWeight: 700,
                }}
              >
                Series A
              </p>
            </div>
            <div className="statsPartition"></div>
            <div className="stage">
              <p>Evaluation</p>
              <p
                style={{
                  marginTop: "-28%",
                  fontSize: "1.5rem",
                  color: "#000",
                  fontWeight: 700,
                }}
              >
                2 Cr.
              </p>
            </div>
            <div className="statsPartition"></div>
            <div className="stage">
              <p>Min. Ask</p>
              <p
                style={{
                  marginTop: "-28%",
                  fontSize: "1.5rem",
                  color: "#000",
                  fontWeight: 700,
                }}
              >
                50K
              </p>
            </div>
          </div>
          <div className="dashBtn"> 
            <Button
                variant="contained"
                sx={{ background: "#000" }}
                
            >Read More</Button>
          </div> 
        </div>


        <div className="dashCard">
          <div className="dashprof">
            <div className="dashProfile"></div>
            <div className="dashName">
              <p>Bugginator</p>
              <div className="dashTagCont">
                <div className="dashTags">FinTech</div>

              </div>
            </div>
          </div>

          <div className="dashDesc">
            <strong>Our Idea </strong> is, Indianopolis, USAIndianopolis,
            USAIndianopolis, USAIndianopolis, USAIndianopolis, USAIndianopolis,
            USAIndianopolis
          </div>

          <div className="dashStats">
            <div className="stage">
              <p>Stage</p>
              <p
                style={{
                  marginTop: "-18%",
                  fontSize: "1.5rem",
                  color: "#000",
                  fontWeight: 700,
                }}
              >
                Series A
              </p>
            </div>
            <div className="statsPartition"></div>
            <div className="stage">
              <p>Evaluation</p>
              <p
                style={{
                  marginTop: "-28%",
                  fontSize: "1.5rem",
                  color: "#000",
                  fontWeight: 700,
                }}
              >
                2 Cr.
              </p>
            </div>
            <div className="statsPartition"></div>
            <div className="stage">
              <p>Min. Ask</p>
              <p
                style={{
                  marginTop: "-28%",
                  fontSize: "1.5rem",
                  color: "#000",
                  fontWeight: 700,
                }}
              >
                50K
              </p>
            </div>
          </div>
          <div className="dashBtn"> 
            <Button
                variant="contained"
                sx={{ background: "#000" }}
                
            >Read More</Button>
          </div> 
        </div>


        <div className="dashCard">
          <div className="dashprof">
            <div className="dashProfile"></div>
            <div className="dashName">
              <p>Bugginator</p>
              <div className="dashTagCont">
                <div className="dashTags">FinTech</div>

              </div>
            </div>
          </div>

          <div className="dashDesc">
            <strong>Our Idea </strong> is, Indianopolis, USAIndianopolis,
            USAIndianopolis, USAIndianopolis, USAIndianopolis, USAIndianopolis,
            USAIndianopolis
          </div>

          <div className="dashStats">
            <div className="stage">
              <p>Stage</p>
              <p
                style={{
                  marginTop: "-18%",
                  fontSize: "1.5rem",
                  color: "#000",
                  fontWeight: 700,
                }}
              >
                Series A
              </p>
            </div>
            <div className="statsPartition"></div>
            <div className="stage">
              <p>Evaluation</p>
              <p
                style={{
                  marginTop: "-28%",
                  fontSize: "1.5rem",
                  color: "#000",
                  fontWeight: 700,
                }}
              >
                2 Cr.
              </p>
            </div>
            <div className="statsPartition"></div>
            <div className="stage">
              <p>Min. Ask</p>
              <p
                style={{
                  marginTop: "-28%",
                  fontSize: "1.5rem",
                  color: "#000",
                  fontWeight: 700,
                }}
              >
                50K
              </p>
            </div>
          </div>
          <div className="dashBtn"> 
            <Button
                variant="contained"
                sx={{ background: "#000" }}
                
            >Read More</Button>
          </div> 
        </div>


        <div className="dashCard">
          <div className="dashprof">
            <div className="dashProfile"></div>
            <div className="dashName">
              <p>Bugginator</p>
              <div className="dashTagCont">
                <div className="dashTags">FinTech</div>

              </div>
            </div>
          </div>

          <div className="dashDesc">
            <strong>Our Idea </strong> is, Indianopolis, USAIndianopolis,
            USAIndianopolis, USAIndianopolis, USAIndianopolis, USAIndianopolis,
            USAIndianopolis
          </div>

          <div className="dashStats">
            <div className="stage">
              <p>Stage</p>
              <p
                style={{
                  marginTop: "-18%",
                  fontSize: "1.5rem",
                  color: "#000",
                  fontWeight: 700,
                }}
              >
                Series A
              </p>
            </div>
            <div className="statsPartition"></div>
            <div className="stage">
              <p>Evaluation</p>
              <p
                style={{
                  marginTop: "-28%",
                  fontSize: "1.5rem",
                  color: "#000",
                  fontWeight: 700,
                }}
              >
                2 Cr.
              </p>
            </div>
            <div className="statsPartition"></div>
            <div className="stage">
              <p>Min. Ask</p>
              <p
                style={{
                  marginTop: "-28%",
                  fontSize: "1.5rem",
                  color: "#000",
                  fontWeight: 700,
                }}
              >
                50K
              </p>
            </div>
          </div>
          <div className="dashBtn"> 
            <Button
                variant="contained"
                sx={{ background: "#000" }}
                
            >Read More</Button>
          </div> 
        </div>


        <div className="dashCard">
          <div className="dashprof">
            <div className="dashProfile"></div>
            <div className="dashName">
              <p>Bugginator</p>
              <div className="dashTagCont">
                <div className="dashTags">FinTech</div>

              </div>
            </div>
          </div>

          <div className="dashDesc">
            <strong>Our Idea </strong> is, Indianopolis, USAIndianopolis,
            USAIndianopolis, USAIndianopolis, USAIndianopolis, USAIndianopolis,
            USAIndianopolis
          </div>

          <div className="dashStats">
            <div className="stage">
              <p>Stage</p>
              <p
                style={{
                  marginTop: "-18%",
                  fontSize: "1.5rem",
                  color: "#000",
                  fontWeight: 700,
                }}
              >
                Series A
              </p>
            </div>
            <div className="statsPartition"></div>
            <div className="stage">
              <p>Evaluation</p>
              <p
                style={{
                  marginTop: "-28%",
                  fontSize: "1.5rem",
                  color: "#000",
                  fontWeight: 700,
                }}
              >
                2 Cr.
              </p>
            </div>
            <div className="statsPartition"></div>
            <div className="stage">
              <p>Min. Ask</p>
              <p
                style={{
                  marginTop: "-28%",
                  fontSize: "1.5rem",
                  color: "#000",
                  fontWeight: 700,
                }}
              >
                50K
              </p>
            </div>
          </div>
          <div className="dashBtn"> 
            <Button
                variant="contained"
                sx={{ background: "#000" }}
                
            >Read More</Button>
          </div> 
        </div>
       
      </div>
    </div>
  );
}

export default Dashboard;
