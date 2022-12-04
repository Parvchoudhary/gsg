import React from "react";
import "./StartUp.css";
import Button from "@mui/material/Button";
import briefImg from "../../assets/breifimg.png";

const lorem = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscing",
];
const loremh = ["1. Lorem ipsum dolor sit amet, consectetur adipiscing :"];

function StartUp() {
  return (
    <div className="briefCont">
      <div className="brief">
        <div className="briefTop">
          <div className="briefProfile"></div>
          <div className="briefName">
            <p style={{ fontSize: "2rem" }}>Bugginator</p>
          </div>
          <div className="briefStats">
            <div className="briefStage">
              <p>Sector</p>
              <p
                style={{
                  marginTop: "-18%",
                  fontSize: "1.5rem",
                  color: "#000",
                  fontWeight: 700,
                }}
              >
                FinTech
              </p>
            </div>
            <div className="division"></div>
            <div className="briefStage">
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
            <div className="division"></div>
            <div className="briefStage">
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
            <div className="division"></div>
            <div className="briefStage">
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
        </div>

        <div className="briefDesc">
          <strong style={{ fontSize: "1.1rem" }}>Brief Description : </strong>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi egestas
          nam vitae tempus sit. Mauris euismod in turpis suscipit mi sagittis.
          Pharetra sapien tristique justo turpis dictum turpis nam aliquam
          ipsum. Neque purus lorem neque facilisis aliquam nec eget ullamcorper.
          Commodo eget proin erat aliquet massa.
        </div>
        <div className="briefimgCont">
          <div className="briefInfo">
            <div className="briefBtn">
              <Button variant="contained" sx={{ background: "#000" }}>
                Pitch
              </Button>
              <Button
                variant="outlined"
                sx={{ border: "none", marginLeft: "1rem", color: "#000" }}
              >
                Prior Investments
              </Button>
            </div>

            <div className="pitch">
              <strong>{loremh[0]}</strong>
              <br />
              {lorem[0]}
              <br />
              <br />
              <strong>{loremh[0]}</strong>
              <br />
              {lorem[0]}
            </div>
          </div>
          <img src={briefImg} className="briefImg" />
        </div>
      </div>
      <div
        className="briefextra"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="briefMessage">
          <p>Are you interested?</p>
          <Button
            variant="contained"
            sx={{
              background: "#4D9762",
              width: "30%",
              height: "45%",
              marginLeft: "10%",
              fontSize: "0.75rem",
              fontWeight: "700",
              "&:hover": {
                background: "#000",
              },
            }}
          >
            Message
          </Button>
        </div>

        <div className="briefTeamCont">
          <div className="briefTeamTitle">
            <h2>Team</h2>
          </div>
          <div className="briefTeamInfo">
            <div className="briefTeamProf">
              <div className="briefprofileImg"></div>
              <div className="briefprofileImg"></div>
              <div className="briefprofileImg"></div>
            </div>
            <div className="briefTeamName">
              <div className="briefprofileDesc">
                <p>Prakash singh</p>
              </div>
              <div className="briefprofileDesc">
                <p>B00tpl3g</p>
              </div>
              <div className="briefprofileDesc">
                <p>Prakash singh</p>
              </div>
            </div>
            <div className="briefTeamPos">
              <div className="briefprofileDesc position">
                <li
                  style={{
                    fontSize: "0.75rem",
                    marginTop: "5%",
                    color: "#6F6F6F",
                  }}
                >
                  Co-Founder
                </li>
              </div>
              <div className="briefprofileDesc position">
                <li
                  style={{
                    fontSize: "0.75rem",
                    marginTop: "5%",
                    color: "#6F6F6F",
                  }}
                >
                  Co-Founder
                </li>
              </div>
              <div className="briefprofileDesc position">
                <li
                  style={{
                    fontSize: "0.75rem",
                    marginTop: "5%",
                    color: "#6F6F6F",
                  }}
                >
                  Co-Founder
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartUp;
