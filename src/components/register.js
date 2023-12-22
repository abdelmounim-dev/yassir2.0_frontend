import React from 'react'
import { Grid,Paper, Avatar, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Login=()=>{

    const paperStyle={padding :30,height:'60vh',width:280, margin:"70px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid item xs={12} sm={8} md={6}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}></Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                <Grid container direction="column" spacing={2}>
                    <Grid item container spacing={2}>
                        <Grid item xs={6}>
                            <TextField label="First Name" type="text" variant="outlined" required />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label="Last Name" type="text" variant="outlined" required />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <TextField label="Phone Number" type="tel" variant="outlined" required sx={{ width: '100%' }} />
                    </Grid>
                
                    <Grid item>
                        <TextField label='Email'  type='email'  required sx={{ width: '100%' }}/>
                    </Grid>
                    <Grid item>
                        <TextField label='Matricule'  type='text'  required sx={{ width: '100%' }}/>
                    </Grid>
                        <Grid item container justifyContent="center">
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