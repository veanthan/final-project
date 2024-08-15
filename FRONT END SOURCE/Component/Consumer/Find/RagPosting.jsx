import React from "react";
import "./ragPosting.css";
import { Card, Box, Typography, Grid } from "@mui/material";
import Looks1Icon from "@mui/icons-material/LooksOne";
import Looks2Icon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Picker from "./Picker";
import Navbar from "../Navbar/Navbar";
// import Footer from "../footer/Footer";
import tamilnadu from "../../support/meenakshi_temple.jpg";
import ladakh from "../../support/ladakh.jpg";
import kerala from "../../support/kerala.jpg";
import taj from "../../support/tajmahal.jpg";
import delhi from "../../support/indiagate.jpg";
import maharashtra from "../../support/gatewayofindia.jpg";
import kolkata from "../../support/kolkata.jpg";
import goa from "../../support/goa.jpg";
import karnataka from "../../support/karnataka.jpg";
import Pondicherry from "../../support/Pondicherry.jpg";
import Uttarakhand from "../../support/Uttarakhand.jpg";
import Nagaland from "../../support/Nagaland.jpg";
import Footer from "../Footer/Footer";

const RagPosting = () => {
  return (
    <div className="outer-container">
      <Navbar />
      <div className="container">
        <div className="text-container">
          <div className="line1">
            <h1>The Hassle Free Rag Picker Services in India</h1>
          </div>
          <div className="line2">
            <h1>
              Trust Eco-Connect for efficient rag picker services in India. Our
              reliable ragger connect based service ensures safe and timely
              collection of your recyclable waste.
            </h1>
          </div>
        </div>
        <Picker />
      </div>
      <div className="about">
        <div className="why-rag">
          <h2>Why use Eco-connect?</h2>
          <div className="use">
            <div className="use1">
              <h3>Easy Connect with Rag Pickers</h3>
              <p>
                Our rag pickers are available around the clock to collect your
                recyclable waste conveniently.
              </p>
            </div>
            <div className="use2">
              <h3>Door to Door Services</h3>
              <p>
                Enjoy the convenience of our 24/7 door-to-door recyclable waste
                collection service.
              </p>
            </div>
          </div>
          <div className="use">
            <div className="use3">
              <h3>Get Anything Sell</h3>
              <p>
                Our rag pickers help you sell your recyclable waste at any time.
              </p>
            </div>
            <div className="use4" style={{ marginLeft: "12vh" }}>
              <h3>Negotiable Price</h3>
              <p>
                We offer flexible pricing for your recyclable waste, ensuring
                the best deal.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="area2"
        style={{ width: "80%", height: "auto", marginLeft: "9rem" }}
      >
        <div className="service">
          <h2 style={{ margin: "2rem" }}>Areas we provide service</h2>
          <Grid
            container
            className="service-area"
            gap={3}
            sx={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid item xs={12} lg={3}>
              <img
                src={tamilnadu}
                alt="Tamil Nadu"
                style={{ width: "15rem", height: "9rem" }}
              />
              <h5>Tamil Nadu</h5>
            </Grid>
            <Grid item xs={12} lg={3} className="service-card">
              <img
                src={ladakh}
                alt="Jammu & Kashmir"
                style={{ width: "15rem", height: "9rem" }}
              />
              <h5>Jammu & Kashmir</h5>
            </Grid>
            <Grid item xs={12} lg={3} className="service-card">
              <img
                src={kerala}
                alt="Kerala"
                style={{ width: "15rem", height: "9rem" }}
              />
              <h5>Kerala</h5>
            </Grid>
            <Grid item xs={12} lg={3} className="service-card">
              <img
                src={delhi}
                alt="Delhi"
                style={{ width: "15rem", height: "9rem" }}
              />
              <h5>Delhi</h5>
            </Grid>
            <Grid item xs={12} lg={3} className="service-card">
              <img
                src={taj}
                alt="Uttar Pradesh"
                style={{ width: "15rem", height: "9rem" }}
              />
              <h5>Uttar Pradesh</h5>
            </Grid>
            <Grid item xs={12} lg={3} className="service-card">
              <img
                src={maharashtra}
                alt="Maharashtra"
                style={{ width: "15rem", height: "9rem" }}
              />
              <h5>Maharashtra</h5>
            </Grid>
            <Grid item xs={12} lg={3} className="service-card">
              <img
                src={goa}
                alt="Goa"
                style={{ width: "15rem", height: "9rem" }}
              />
              <h5>Goa</h5>
            </Grid>
            <Grid item xs={12} lg={3} className="service-card">
              <img
                src={kolkata}
                alt="Kolkata"
                style={{ width: "15rem", height: "9rem" }}
              />
              <h5>Kolkata</h5>
            </Grid>
            <Grid item xs={12} lg={3} className="service-card">
              <img
                src={karnataka}
                alt="Karnataka"
                style={{ width: "15rem", height: "9rem" }}
              />
              <h5>Karnataka</h5>
            </Grid>
            <Grid item xs={12} lg={3} className="service-card">
              <img
                src={Pondicherry}
                alt="Pondicherry"
                style={{ width: "15rem", height: "9rem" }}
              />
              <h5>Pondicherry</h5>
            </Grid>
            <Grid item xs={12} lg={3} className="service-card">
              <img
                src={Uttarakhand}
                alt="Uttarakhand"
                style={{ width: "15rem", height: "9rem" }}
              />
              <h5>Uttarakhand</h5>
            </Grid>
            <Grid item xs={12} lg={3} className="service-card">
              <img
                src={Nagaland}
                alt="Nagaland"
                style={{ width: "15rem", height: "9rem" }}
              />
              <h5>Nagaland</h5>
            </Grid>
          </Grid>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RagPosting;
