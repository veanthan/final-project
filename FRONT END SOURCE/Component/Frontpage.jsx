import React from "react";
import "./frontPage.css";
import tree from "../assets/slide-3.jpg"
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function FrontPage() {
  return (
    <div className="welcome-container " style={{display:'flex',justifyContent:'space-evenly'}}>
      <div className="welcome-text">
        <h1>Welcome to Our Website!</h1>
        <p>
          We connect individuals directly with certified recyclers to
          responsibly dispose of e-waste.
          {/* <br /> */}
          Join us in our mission to protect the environment and conserve
          resources for future generations.
        </p>
        <div className="change" >
        <Link to="/consumersignin" style={{}}>
          <Button variant="contained" sx={{ fontWeight: '550',gap:'10px',marginRight:"10px" }}>consumer</Button>
          </Link>
          <Link to="/signin">
          <Button variant="contained" sx={{ fontWeight: '550' }}>ragPicker</Button>
          </Link>
      </div>
        </div>

      <div className="welcome-image">
        <img
          src={tree}
          alt="Loading"
          style={{
            width: "100%",
            height: "50vh",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        />
      </div>
     
    </div>
  );
}