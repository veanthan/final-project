import React from 'react'
import { Box,TableContainer,Paper,Table,TableHead,TableRow,TableCell,TableBody,Button } from '@mui/material'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
export default function FindRequest() {
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
            
                <TableCell>Rajadurai v</TableCell>
                <TableCell>raj@gmail.com</TableCell>
                <TableCell>7092961093</TableCell>
                <TableCell>13/8,kumarapalayam</TableCell>
                <TableCell>Metal</TableCell>
                <TableCell>10 (per kg)</TableCell>
                <TableCell>
                  <Button
                    fullWidth="md"
                    variant="contained"
                    color="success"
                    onClick={() => handleDelete(user.id)}
                  >
                    Accept
                  </Button>
                </TableCell>
              
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    {/* <Footer/> */}
    </>
  )
}
