import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Grid,
} from "@mui/material";
import axios from 'axios';
// import "./ragPaper.css";

const Picker = () => {
  const [estimatedvalue, setEstimatedvalue] = useState(0);
  const [email, setEmail] = useState("");
  const [phn, setPhn] = useState("");
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [quantity, setQuantity] = useState('');
  const [ragselect, setRagselect] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);

  const handleClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCloseSuccessDialog = () => {
    setSuccessDialogOpen(false);
  };

  useEffect(() => {
    // Calculate estimated value based on quantity and rag type
    switch (ragselect) {
      case "Metal":
        setEstimatedvalue(30 * quantity);
        break;
      case "Paper":
        setEstimatedvalue(10 * quantity);
        break;
      case "Plastic":
        setEstimatedvalue(15 * quantity);
        break;
      case "Glass":
        setEstimatedvalue(25 * quantity);
        break;
      case "Mixed":
        setEstimatedvalue(20 * quantity);
        break;
      default:
        setEstimatedvalue(0);
        break;
    }
  }, [quantity, ragselect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: fname + ' ' + lname,
      email: email,
      phone: phn,
      address: address + ', ' + city + ', ' + state,
      ragType: ragselect,
      quantity: quantity,
      estimatedAmount: estimatedvalue,
    };
    // console.log(formData.name);

    axios.post('http://localhost:8080/ecoconnect/postragger/post', formData)
      .then(response => {
        console.log(response.data);
        setSuccessDialogOpen(true);
        setFName("");
        setLName("");
        setEmail("");
        setPhn("");
        setAddress("");
        setCity("");
        setState("");
        setQuantity('');
        setRagselect("");
        setEstimatedvalue(0); // Open success dialog on successful submission
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error or show error message
      });

    setOpenDialog(false); // Close main dialog after form submission
  };

  // Array of cities
  const cities = [
    "Ariyalur", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul",
    "Erode", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai",
    "Nagapattinam", "Namakkal", "Perambalur", "Pudukkottai", "Ramanathapuram",
    "Salem", "Sivaganga", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli",
    "Tirunelveli", "Tiruppur", "Trichy", "Vellore", "Viluppuram", "Virudhunagar","Rameswaram"
  ];

  // Array of states
  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  return (
    <>
      <div
        style={{
          width: '10%',
          display: 'flex',
          justifyContent: 'center',
          height: '30%',
          position: 'relative',
          top: '30%',
        }}
      >
        <Button
          variant="contained"
          fullWidth
          onClick={handleClick}
        >
          Find Pickers
        </Button>
      </div>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Find Pickers</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  value={fname}
                  onChange={(e) => setFName(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  value={lname}
                  onChange={(e) => setLName(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  type="phone"
                  value={phn}
                  onChange={(e) => setPhn(e.target.value)}
                  required
                  inputProps={{ maxLength: 10 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel>State</InputLabel>
                  <Select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    label="State"
                    required
                  >
                    {states.map((state) => (
                      <MenuItem key={state} value={state}>{state}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel>City</InputLabel>
                  <Select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    label="City"
                    required
                  >
                    {cities.map((city) => (
                      <MenuItem key={city} value={city}>{city}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Rag-Type</InputLabel>
                  <Select
                    value={ragselect}
                    onChange={(e) => setRagselect(e.target.value)}
                    label="Rag-Type"
                    required
                  >
                    <MenuItem value="Metal">Metal</MenuItem>
                    <MenuItem value="Paper">Paper</MenuItem>
                    <MenuItem value="Plastic">Plastic</MenuItem>
                    <MenuItem value="Glass">Glass</MenuItem>
                    <MenuItem value="Mixed">Mixed</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Quantity in kg"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Estimated value in Rs"
                  value={estimatedvalue}
                  disabled
                />
              </Grid>
              <Grid item xs={12}>
                <DialogActions>
                  <Button onClick={handleCloseDialog} style={{ color: "black" }}>
                    Cancel
                  </Button>
                  <Button type="submit"
                    variant="outlined" style={{ color: "white", backgroundColor: "black" }}
                  >
                    Submit
                  </Button>
                </DialogActions>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={successDialogOpen} onClose={handleCloseSuccessDialog}>
        <DialogTitle>🎉 Submission Successful 🎉</DialogTitle>
        <DialogContent>
          Thank you for posting your rag details. We will inform you once a picker accepts your order.
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSuccessDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Picker;
