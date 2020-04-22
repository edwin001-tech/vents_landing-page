import React from 'react';
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core'
import './style.css';
import Grid from '@material-ui/core/Grid';


 
function App() {
  
    return (
      <div id="main">
        <Typography variant="h1" align="center" style={{color: "#2196F3"}}>
        COMTRA
      </Typography>
      <Typography variant="h5" align="center" style={{marginTop: "40px"}}>
        Maseno University Comrade E-commerce Platform
      </Typography>
      <div style={{width: "50%", margin: "0 auto", marginTop: "40px"}}>
      <Grid container  spacing={2} align="center" >
      <Grid item xs={4} >

      </Grid>
      <div>
        <Grid item xs={4} >
          <Link to='/Login'>
<Button variant="raised" color="primary" style={{backgroundColor: "#2196F3"}}>
        Login
      </Button>
      </Link>
      </Grid>
      </div>
      
<div>
      <Grid item xs={4} >
        <Link to='/Register'>
<Button variant="raised" color="primary" style={{backgroundColor: "#2196F3"}}>
        Register
      </Button>
      </Link>
      </Grid>
      </div>
      


      <Grid item xs={4} >

      </Grid>
      </Grid>
      </div>

      </div>
    );
  }


export default App
