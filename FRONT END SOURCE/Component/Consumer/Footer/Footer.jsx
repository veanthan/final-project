import React from "react";
import { Box, Icon, IconButton, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "black", color: "white" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          padding: "1rem",
          alignItems: "start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <img
              src="/images/eco-connect-icon-no-slogan.png"
              style={{ width: "15rem", paddingBottom: ".5rem" }}
            />
            <Typography
              variant="h6"
              sx={{ color: "white", paddingLeft: ".5rem" }}
            >
              Find Rag Pickers, easily.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h5" sx={{ color: "white", paddingY: ".5rem" }}>
              About
            </Typography>

            <Link to="/consumerabout">
              <Typography
                variant="body2"
                sx={{ color: "white", paddingY: ".5rem" }}
              >
                About Us
              </Typography>
            </Link>

            <Typography
              variant="body2"
              sx={{ color: "white", paddingY: ".5rem" }}
            >
              Contact Us
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h5" sx={{ paddingY: ".5rem" }}>
              Quick Links
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "white", paddingY: ".5rem" }}
            >
              Home
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "white", paddingY: ".5rem" }}
            >
              Pick A Rag
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "white", paddingY: ".5rem" }}
            >
              API Integration
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "white", paddingY: ".5rem" }}
            >
              Picker Dashboard
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "white", paddingY: ".5rem" }}
            >
              Find a Picker
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h5" sx={{ paddingY: ".5rem" }}>
              Support
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "white", paddingY: ".5rem" }}
            >
              Contact Us
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "white", paddingY: ".5rem" }}
            >
              Privacy Policies
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "white", paddingY: ".5rem" }}
            >
              Terms of Services
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "white", paddingY: ".5rem" }}
            >
              Recent FAQs
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "white", paddingY: ".5rem" }}
            >
              Picker Terms & Conditions
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            paddingY: "2rem",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h5" sx={{ color: "white", paddingY: ".5rem" }}>
              Our Service Extension
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", paddingY: ".5rem" }}
            >
              Delhi
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", paddingY: ".5rem" }}
            >
              Mumbai
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", paddingY: ".5rem" }}
            >
              Bangalore
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", paddingY: ".5rem" }}
            >
              Chennai
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="body1"
              sx={{ color: "black", paddingY: ".5rem", userSelect: "none" }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", paddingY: ".5rem" }}
            >
              Kolkata
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", paddingY: ".5rem" }}
            >
              Pune
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", paddingY: ".5rem" }}
            >
              Hyderabad
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", paddingY: ".5rem" }}
            >
              Ahmedabad
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="body1"
              sx={{ color: "black", paddingY: ".5rem", userSelect: "none" }}
            >
              Picker Dashboards
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", paddingY: ".5rem" }}
            >
              Jaipur
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", paddingY: ".5rem" }}
            >
              Lucknow
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", paddingY: ".5rem" }}
            >
              Chandigarh
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", paddingY: ".5rem" }}
            >
              Indore
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="body1"
              sx={{ color: "black", paddingY: ".5rem", userSelect: "none" }}
            >
              Pickers Term Condition
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", paddingY: ".5rem" }}
            >
              Kanpur
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", paddingY: ".5rem" }}
            >
              Nagpur
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", paddingY: ".5rem" }}
            >
              Patna
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", paddingY: ".5rem" }}
            >
              Bhopal
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <IconButton
              sx={{
                color: "white",
                backgroundColor: "#333333",
                padding: ".5rem",
                marginX: ".25rem",
              }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              sx={{
                color: "white",
                backgroundColor: "#333333",
                padding: ".5rem",
                marginX: ".25rem",
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              sx={{
                color: "white",
                backgroundColor: "#333333",
                padding: ".5rem",
                marginX: ".25rem",
              }}
            >
              <XIcon />
            </IconButton>
            <IconButton
              sx={{
                color: "white",
                backgroundColor: "#333333",
                padding: ".5rem",
                marginX: ".25rem",
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              sx={{
                color: "white",
                backgroundColor: "#333333",
                padding: ".5rem",
                marginX: ".25rem",
              }}
            >
              <YouTubeIcon />
            </IconButton>
          </Box>
          <Typography
            variant="body1"
            sx={{ color: "white", paddingY: ".5rem" }}
          >
            © 2024 Eco Connect. All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </footer>
  );
}
