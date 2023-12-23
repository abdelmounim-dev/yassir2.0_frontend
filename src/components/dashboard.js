import React from 'react';
import { AppBar, Toolbar, Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, TextField, Button, Box } from '@mui/material';

const Dashboard = () => {
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
        <TextField label="Filter" variant="outlined" />
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Column 1</TableCell>
              <TableCell>Column 2</TableCell>
              <TableCell>Column 3</TableCell>
            </TableRow>
          </TableHead>
        <TableBody>
            <TableRow>
                <TableCell>Placeholder 1</TableCell>
                <TableCell>Placeholder 2</TableCell>
                <TableCell>Placeholder 3</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Placeholder 4</TableCell>
                <TableCell>Placeholder 5</TableCell>
                <TableCell>Placeholder 6</TableCell>
            </TableRow>
        </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dashboard;