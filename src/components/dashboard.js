import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

const Dashboard = () => {
  const [trips, setTrips] = useState([]);
  const [filter, setFilter] = useState('');
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [isFormOpen, setFormOpen] = useState(false);
  const [placesLeft, setPlacesLeft] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // Simulate fetching data from an API endpoint
    // Replace this with your actual backend API endpoint
    setTimeout(() => {
      setTrips([
        { id: 1, departure: 'City A', destination: 'City B', driver: 'John Doe', departureTime: '10:00 AM' },
        { id: 2, departure: 'City C', destination: 'City D', driver: 'Jane Smith', departureTime: '02:30 PM' },
        // Add more trip data as needed
      ]);
    }, 1000);
  };

  const handleInsert = () => {
    // Simulate inserting trip data into the backend
    fetchData();
  };

  const handleGeolocation = () => {
    // Simulate geolocation logic and fetching nearby trips
    setTrips([
      { id: 3, departure: 'City E', destination: 'City F', driver: 'Sam Johnson', departureTime: '01:00 PM' },
      { id: 4, departure: 'City G', destination: 'City H', driver: 'Alex Brown', departureTime: '03:45 PM' },
      // Add more nearby trip data as needed
    ]);
  };

  const handleProposeClick = (trip) => {
    setSelectedTrip(trip);
    setFormOpen(true);
  };

  const handleCloseForm = () => {
    setFormOpen(false);
  };

  const handlePlacesLeftChange = (event) => {
    setPlacesLeft(event.target.value);
  };

  const handleFormSubmit = () => {
    // Add logic to handle form submission, e.g., sending data to the backend
    console.log('Submitted form with places left:', placesLeft);

    // Close the form after submission
    setFormOpen(false);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Covoiturage
          </Typography>
          <Button color="inherit" sx={{ ml: 3 }}>
            Navbar Item 1
          </Button>
          <Button color="inherit" sx={{ ml: 3 }}>
            Navbar Item 2
          </Button>
          <Button color="inherit" sx={{ ml: 3 }}>
            Navbar Item 3
          </Button>
          <Button color="inherit" sx={{ ml: 3 }}>
            Navbar Item 4
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', m: 3 }}>
        <TextField label="Filter" variant="outlined" value={filter} onChange={(e) => setFilter(e.target.value)} />
        <Button onClick={handleGeolocation} variant="contained" color="primary" sx={{ ml: 2 }}>
          Nearby Trips
        </Button>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Departure</TableCell>
              <TableCell>Destination</TableCell>
              <TableCell>Driver</TableCell>
              <TableCell>Departure Time</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trips.map((trip) => (
              <TableRow key={trip.id}>
                <TableCell>{trip.departure}</TableCell>
                <TableCell>{trip.destination}</TableCell>
                <TableCell>{trip.driver}</TableCell>
                <TableCell>{trip.departureTime}</TableCell>
                <TableCell>
                  <Button onClick={() => handleProposeClick(trip)} variant="outlined" color="primary">
                    Propose
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={handleInsert} variant="contained" color="primary" sx={{ mt: 2 }}>
        Insert Trip
      </Button>

      {/* Propose Form Dialog */}
      <Dialog open={isFormOpen} onClose={handleCloseForm}>
        <DialogTitle>Propose a Trip</DialogTitle>
        <DialogContent>
          {/* Render the form with pre-filled details based on selectedTrip */}
          {selectedTrip && (
            <div>
              <p>Departure: {selectedTrip.departure}</p>
              <p>Destination: {selectedTrip.destination}</p>
              <p>Driver: {selectedTrip.driver}</p>
              <p>Departure Time: {selectedTrip.departureTime}</p>
              <TextField
                label="Number of Places Left"
                type="number"
                variant="outlined"
                value={placesLeft}
                onChange={handlePlacesLeftChange}
              />
              {/* Add more form input fields for additional details */}
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm} color="primary">
            Cancel
          </Button>
          <Button onClick={handleFormSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Dashboard;
