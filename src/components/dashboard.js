import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, TextField, Button, Box } from '@mui/material';

const Dashboard = () => {
  const [trips, setTrips] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // For now, let's simulate fetching data from an API endpoint
    // In a real setup, replace this with your actual backend API endpoint
    // Example with a delay to simulate API call
    setTimeout(() => {
      setTrips([
        { id: 1, departure: 'City A', destination: 'City B', driver: 'John Doe', departureTime: '10:00 AM' },
        { id: 2, departure: 'City C', destination: 'City D', driver: 'Jane Smith', departureTime: '02:30 PM' },
        // Add more trip data as needed
      ]);
    }, 1000);
  };

  const handleInsert = () => {
    // Simulate the process of inserting trip data into the backend
    fetchData();
  };

  const handleGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          console.log('User Location:', position.coords.latitude, position.coords.longitude);

          // Send user's location to your backend and fetch nearby trips
          // Replace the following with your actual API endpoint and logic
          fetch(`your-backend-api-endpoint?lat=${position.coords.latitude}&lng=${position.coords.longitude}`)
            .then(response => response.json())
            .then(data => setTrips(data))
            .catch(error => console.error('Error fetching nearby trips:', error));
        },
        error => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by the browser');
    }
  };

  const filteredTrips = trips.filter(trip =>
    trip.departure.toLowerCase().includes(filter.toLowerCase()) ||
    trip.destination.toLowerCase().includes(filter.toLowerCase()) ||
    trip.driver.toLowerCase().includes(filter.toLowerCase()) ||
    trip.departureTime.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Covoiturage
          </Typography>
          <Button color="inherit" sx={{ ml: 3 }}>Navbar Item 1</Button>
          <Button color="inherit" sx={{ ml: 3 }}>Navbar Item 2</Button>
          <Button color="inherit" sx={{ ml: 3 }}>Navbar Item 3</Button>
          <Button color="inherit" sx={{ ml: 3 }}>Navbar Item 4</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', m: 3 }}>
        <TextField
          label="Filter"
          variant="outlined"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
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
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTrips.map(trip => (
              <TableRow key={trip.id}>
                <TableCell>{trip.departure}</TableCell>
                <TableCell>{trip.destination}</TableCell>
                <TableCell>{trip.driver}</TableCell>
                <TableCell>{trip.departureTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={handleInsert} variant="contained" color="primary" sx={{ mt: 2 }}>
        Insert Trip
      </Button>
    </div>
  );
};

export default Dashboard;
