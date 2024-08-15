import React from 'react';
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Grid,
  InputAdornment,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import Looks1Icon from '@mui/icons-material/LooksOne';
import Looks2Icon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import './ragAbout.css';
// import Footer from '../footer/Footer';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';

export default function RagAbout() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    city: '',
  });

  const [successDialogOpen, setSuccessDialogOpen] = React.useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/ecoconnect/login/post', formData)
      .then(response => {
        console.log('Success:', response.data);
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          state: '',
          city: '',
        });

        handleOpenSuccessDialog(); // Open the dialog on success
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleOpenSuccessDialog = () => {
    setSuccessDialogOpen(true);
  };

  const handleCloseSuccessDialog = () => {
    setSuccessDialogOpen(false);
  };
  
  return (
    <>
    <Navbar/>
    <Box
      className="rag-pick"
      sx={{
        display: 'flex',
        width: '98.94vw',
        flexDirection: 'column',
        height: 'auto',
      }}
    >
      <Box className="rag-top">
        <Box className="rag-top-content">
          <p className="rag-top-p">
            More than just rag pickers,
            <br />
            We&apos;re Eco-Connectors.
          </p>
        </Box>
        <Box className="rag-join-form">
          <Box
            sx={{
              width: '50%',
              padding: '1rem',
              backgroundColor: 'white',
              borderRadius: '7px',
            }}
            component={'form'}
            onSubmit={handleSubmit}
          >
            <h2 style={{ textAlign: 'center' }}>Join as Rag-connector</h2>
            <TextField
              id="name"
              name="name"
              fullWidth
              label="Name"
              type="text"
              variant="outlined"
              margin="normal"
              value={formData.name}
              onChange={handleChange}
              required 
            />
            <TextField
              id="email"
              name="email"
              fullWidth
              type="email"
              label="Email"
              variant="outlined"
              margin="normal"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              id="phone"
              name="phone"
              fullWidth
              label="Phone"
              type="tel"
              inputProps={{ maxLength: 10 }}
              variant="outlined"
              margin="normal"
              required
              value={formData.phone}
              onChange={handleChange}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>State</InputLabel>
              <Select
                value={formData.state}
                onChange={(e) =>
                  setFormData({ ...formData, state: e.target.value })
                }
                label="State"
                required
              >
                  <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
                <MenuItem value="Arunachal Pradesh">Arunachal Pradesh</MenuItem>
                <MenuItem value="Assam">Assam</MenuItem>
                <MenuItem value="Bihar">Bihar</MenuItem>
                <MenuItem value="Chhattisgarh">Chhattisgarh</MenuItem>
                <MenuItem value="Goa">Goa</MenuItem>
                <MenuItem value="Gujarat">Gujarat</MenuItem>
                <MenuItem value="Haryana">Haryana</MenuItem>
                <MenuItem value="Himachal Pradesh">Himachal Pradesh</MenuItem>
                <MenuItem value="Jharkhand">Jharkhand</MenuItem>
                <MenuItem value="Karnataka">Karnataka</MenuItem>
                <MenuItem value="Kerala">Kerala</MenuItem>
                <MenuItem value="Madhya Pradesh">Madhya Pradesh</MenuItem>
                <MenuItem value="Maharashtra">Maharashtra</MenuItem>
                <MenuItem value="Manipur">Manipur</MenuItem>
                <MenuItem value="Meghalaya">Meghalaya</MenuItem>
                <MenuItem value="Mizoram">Mizoram</MenuItem>
                <MenuItem value="Nagaland">Nagaland</MenuItem>
                <MenuItem value="Odisha">Odisha</MenuItem>
                <MenuItem value="Punjab">Punjab</MenuItem>
                <MenuItem value="Rajasthan">Rajasthan</MenuItem>
                <MenuItem value="Sikkim">Sikkim</MenuItem>
                <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
                <MenuItem value="Telangana">Telangana</MenuItem>
                <MenuItem value="Tripura">Tripura</MenuItem>
                <MenuItem value="Uttar Pradesh">Uttar Pradesh</MenuItem>
                <MenuItem value="Uttarakhand">Uttarakhand</MenuItem>
                <MenuItem value="West Bengal">West Bengal</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel>City</InputLabel>
              <Select
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                label="City"
                required
              >
                {/* List of cities */}
                <MenuItem value="ariyalur">Ariyalur</MenuItem>
                <MenuItem value="chennai">Chennai</MenuItem>
                <MenuItem value="coimbatore">Coimbatore</MenuItem>
                <MenuItem value="cuddalore">Cuddalore</MenuItem>
                <MenuItem value="dharmapuri">Dharmapuri</MenuItem>
                <MenuItem value="dindigul">Dindigul</MenuItem>
                <MenuItem value="erode">Erode</MenuItem>
                <MenuItem value="kanchipuram">Kanchipuram</MenuItem>
                <MenuItem value="kanyakumari">Kanyakumari</MenuItem>
                <MenuItem value="karur">Karur</MenuItem>
                <MenuItem value="krishnagiri">Krishnagiri</MenuItem>
                <MenuItem value="madurai">Madurai</MenuItem>
                <MenuItem value="nagapattinam">Nagapattinam</MenuItem>
                <MenuItem value="namakkal">Namakkal</MenuItem>
                <MenuItem value="perambalur">Perambalur</MenuItem>
                <MenuItem value="pudukkottai">Pudukkottai</MenuItem>
                <MenuItem value="ramanathapuram">Ramanathapuram</MenuItem>
                <MenuItem value="salem">Salem</MenuItem>
                <MenuItem value="sivaganga">Sivaganga</MenuItem>
                <MenuItem value="thanjavur">Thanjavur</MenuItem>
                <MenuItem value="theni">Theni</MenuItem>
                <MenuItem value="thoothukudi">Thoothukudi</MenuItem>
                <MenuItem value="tiruchirappalli">Tiruchirappalli</MenuItem>
                <MenuItem value="tirunelveli">Tirunelveli</MenuItem>
                <MenuItem value="tiruppur">Tiruppur</MenuItem>
                <MenuItem value="trichy">Trichy</MenuItem>
                <MenuItem value="vellore">Vellore</MenuItem>
                <MenuItem value="viluppuram">Viluppuram</MenuItem>
                <MenuItem value="virudhunagar">Virudhunagar</MenuItem>                {/* Other cities */}
              </Select>
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ width: '10rem', fontSize: 18 }}
            >
              Join
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          paddingBottom: '4rem',
        }}
      >
        <Typography variant="h4" sx={{ textAlign: 'center', margin: '2rem 0' }}>
          Why join us?
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{ textAlign: 'center', paddingLeft: '15rem' }}
        >
          <Grid item lg={6}>
            <Box sx={{ width: '50%' }}>
              <img
                src="/images/earn-money.png"
                style={{ width: '8rem', height: '8rem' }}
              />
              <Typography variant="h5">Earn money</Typography>
              <Typography>
                Turn your rags into cash! Our app connects you with customers
                looking to recycle, letting you earn a steady income on your own
                schedule.
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box sx={{ width: '50%' }}>
              <img
                src="/images/eco-friendly.png"
                style={{ width: '8rem', height: '8rem' }}
              />
              <Typography variant="h5">Eco-friendly</Typography>
              <Typography>
                Our platform promotes a circular economy by giving valuable
                materials a second life. Join us and make a difference for the
                planet!
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box sx={{ width: '50%' }}>
              <img
                src="/images/flexible-hrs.png"
                style={{ width: '8rem', height: '8rem' }}
              />
              <Typography variant="h5">Flexible hours</Typography>
              <Typography>
                No fixed schedule, no boss breathing down your neck. Our app
                gives you the freedom to work at your own pace and set your own
                hours.
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box sx={{ width: '50%' }}>
              <img
                src="/images/easy-to-use.png"
                style={{ width: '8rem', height: '8rem' }}
              />
              <Typography variant="h5">Easy to use</Typography>
              <Typography>
                Simple to use and easy to navigate, our work makes it a breeze
                to connect with customers and manage your jobs.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          paddingBottom: '4rem',
        }}
      >
        <Typography variant="h4" sx={{ textAlign: 'center', margin: '2rem 0' }}>
          How it works?
        </Typography>
        <Grid container spacing={4} sx={{ textAlign: 'center' }}>
          <Grid item lg={4}>
            <Looks1Icon color="primary" sx={{ fontSize: '3rem' }} />
            <Typography variant="h5">Sign up</Typography>
            <Typography>Fill the form above to join us.</Typography>
          </Grid>
          <Grid item lg={4}>
            <Looks2Icon color="primary" sx={{ fontSize: '3rem' }} />
            <Typography variant="h5">Collect Rag</Typography>
            <Typography>Collect rag from your area.</Typography>
          </Grid>
          <Grid item lg={4}>
            <Looks3Icon color="primary" sx={{ fontSize: '3rem' }} />
            <Typography variant="h5">Get paid</Typography>
            <Typography>Get paid for the waste you collect.</Typography>
          </Grid>
        </Grid>
        
      </Box> 
           {/* <Footer /> */}
      <Dialog open={successDialogOpen} onClose={handleCloseSuccessDialog}>
        <DialogTitle>🎉 Congratulations 🎉</DialogTitle>
        <DialogContent>
        Welcome! You are now an Eco Connector!.you will help make our world greener while earning rewards. Thank you for making a difference!
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSuccessDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
    </>
  );
}
