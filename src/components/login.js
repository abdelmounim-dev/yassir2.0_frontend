import React from 'react'
import { Grid,Paper, Avatar, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Login=()=>{

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid item xs={12} sm={8} md={6}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <TextField label='Username' placeholder='Enter username' fullWidth required/>
                    </Grid>
                
                    <Grid item>
                        <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                    </Grid>
                
                
                    <Grid item>
                        <Button variant="contained" color="primary" type="submit">
                            Login
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="secondary" component={Link} to="/register">
                            Register
                        </Button> 
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Login