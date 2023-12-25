import React, { useState } from 'react';
import { Grid, Paper, Avatar, TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const paperStyle = { padding: 30, height: '60vh', width: 280, margin: "70px auto" };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnstyle = { margin: '8px 0' };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/auth/register', { firstName, lastName, phoneNumber, email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Grid item xs={12} sm={8} md={6}>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}></Avatar>
          <h2>Sign Up</h2>
        </Grid>
        <Grid container direction="column" spacing={2}>
          <Grid item container spacing={2}>
            <Grid item xs={6}>
              <TextField label="First Name" type="text" variant="outlined" required
                value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Last Name" type="text" variant="outlined" required
                value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </Grid>
          </Grid>
          <Grid item>
            <TextField label="Phone Number" type="tel" variant="outlined" required sx={{ width: '100%' }}
              value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </Grid>
          <Grid item>
            <TextField label='Email' type='email' required sx={{ width: '100%' }}
              value={email} onChange={(e) => setEmail(e.target.value)} />
          </Grid>
          <Grid item>
            <TextField label='Password' type='password' required sx={{ width: '100%' }}
              value={password} onChange={(e) => setPassword(e.target.value)} />
          </Grid>
          <Grid item container justifyContent="center">
            <Button variant="contained" color="secondary" onClick={handleRegister} style={btnstyle}>
              Register
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Register;