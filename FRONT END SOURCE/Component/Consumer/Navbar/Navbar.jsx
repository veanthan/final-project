import { AppBar, Button, MenuItem, Toolbar, Typography, Menu } from '@mui/material'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { Avatar } from '@mui/material';
import image from '../../../assets/profile.jpg'
const Navbar = () => {
  const [profile, setProfile] = useState(null);

  const handleClick = (e) => {
    setProfile(e.currentTarget);
  }

  const handleClose = () => {
    setProfile(null);
  }

  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          backgroundColor: 'white',
          color: 'black',
          display: 'flex',
          justifyContent: 'space-between',
          padding: "0.2%",
          alignItems: "center"
        }}
      >
        <Link to="/consumerhome" className="logo">
          <img
            src="../../../../src/assets/logo-no-background.png"
            style={{ width: '12rem' }}
            alt="Logo"
          />
        </Link>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            alignItems: "center",
          }}
        >
          <Link to="/consumerhome">
          <Typography sx={{ fontWeight: '550' }}>Home</Typography>
          </Link>
          {/* <Link to="/consumerabout">
          <Typography sx={{ fontWeight: '550' }}>About Us</Typography>
          </Link>
          <Link to="/consumerservice">
          <Typography sx={{ fontWeight: '550' }}>Service</Typography>
          </Link> */}
          <Link to="/consumerfind">
          <Typography sx={{ fontWeight: '550' }}>Consumer</Typography>
          </Link>

          <Button onClick={handleClick}>
            <Avatar alt="Remy Sharp" src={image} />
          </Button>
          <Menu 
            anchorEl={profile}
            open={Boolean(profile)}
            onClose={handleClose}
          >
            <Link to="/consumerprofile">
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            </Link>
            <Link to="/">
            <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Link>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;
