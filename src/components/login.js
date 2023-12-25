import React, { useState } from 'react';
import { Grid, Paper, Avatar, TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const paperStyle = { padding: 30, height: '50vh', width: 280, margin: "70px auto" };
  const avatarStyle = { backgroundColor: '#1bbd7e' };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/auth/login', { username, password });
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
          <h2>Sign In</h2>
        </Grid>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <TextField label='Username' placeholder='Enter username' fullWidth required
              value={username} onChange={(e) => setUsername(e.target.value)} />
          </Grid>
          <Grid item>
            <TextField label='Password' placeholder='Enter password' type='password' fullWidth required
              value={password} onChange={(e) => setPassword(e.target.value)} />
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={6}>
              <Button variant="contained" color="primary" type="submit" onClick={handleLogin}>
                Login
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" color="secondary" component={Link} to="/register">
                Register
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Login;