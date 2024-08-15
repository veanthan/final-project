import { AppBar, Button, MenuItem, Toolbar, Typography, Menu } from '@mui/material'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { Avatar } from '@mui/material';

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
        <Link to="/home" className="logo">
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
          <Link to="/home">
          <Typography sx={{ fontWeight: '550' }}>Home</Typography>
          </Link>
          <Link to="/ragabout">
          <Typography sx={{ fontWeight: '550' }}>RagPicker</Typography>
          </Link>
          <Link to="/ragservice">
          <Typography sx={{ fontWeight: '550' }}>Service</Typography>
          </Link>
          <Link to="/findrequest">
          <Typography sx={{ fontWeight: '550' }}>Request</Typography>
          </Link>

          <Button onClick={handleClick}>
            <Avatar alt="Remy Sharp"  />
          </Button>
          <Menu
            anchorEl={profile}
            open={Boolean(profile)}
            onClose={handleClose}
          >
            <Link to="/ragprofile">
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
