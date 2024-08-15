import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Box
} from '@mui/material';
import axios from "axios";
import Navbar from "../Navbar/Navbar";

export default function FindRequest() {
  const [users, setUsers] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/ecoconnect/getRags')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching rag data:', error);
      });
  }, []);

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleAcceptClick = (id) => {
    axios.delete(`http://localhost:8080/ecoconnect/deleteRag/${id}`)
      .then(response => {
        console.log('Delete successful');
        setUsers((currentUsers) => currentUsers.filter((user) => user.id !== id));
        setSelectedUserId(id);
        setOpenDialog(true);
      })
      .catch(error => {
        console.error('Error deleting rag:', error);
      });
  };

  return (
    <>
    <Navbar/>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          color: 'black',
          paddingY: '1.6rem',
        }}
      >
        <h1>Current Request</h1>
      </Box>
      <div style={{ margin: '50px' }}>
        <TableContainer component={Paper} style={{ border: "1px solid black" }}>
          <Table sx={{ maxWidth: 11000 }} aria-label="simple table">
            <TableHead sx={{ border: "2px solid black" }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.4rem' }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.4rem' }}>Email</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.4rem' }}>Phone Number</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.4rem' }}>Address</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.4rem' }}>Rag Type</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.4rem' }}>Quantity</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.4rem' }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.address}</TableCell>
                  <TableCell>{user.ragType}</TableCell>
                  <TableCell>{user.quantity} (per kg)</TableCell>
                  <TableCell>
                    <Button
                      fullWidth="md"
                      variant="contained"
                      color="success"
                      onClick={() => handleAcceptClick(user.id)}
                    >
                      Accept
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle sx={{ backgroundColor: '#4caf50', color: '#fff' }}>
          Order Accepted 🎉
        </DialogTitle>
        <DialogContent dividers sx={{ backgroundColor: '#f0f9fa' }}>
          <Typography gutterBottom>
            Your order has been successfully accepted. Thank you for your
            contribution!
          </Typography>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: '#c8e6c9' }}>
          <Button onClick={handleClose} sx={{ color: '#1b5e20' }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}