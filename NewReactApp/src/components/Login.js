import React from 'react'
import {Box,Button,TextField,Typography} from '@mui/material'
import { Link } from "react-router-dom";


function Login() {
  return (
    <div>
      <form>
        <Box 
        display={"flex"} 
        flexDirection={"column"} 
        maxWidth={400} 
        alignItems={"center"} 
        justifyContent={"center"}
        margin={"auto"} 
        marginTop={5}
        padding={3} 
        borderRadius={5}
        boxShadow={"5px 5px 10px #ccc"}
        >
                <Typography variant='h5' padding={2} textAlign={'center'}> My company </Typography>
                <TextField margin='normal' type='text' variant='outlined' placeholder='UserName'/>
                <TextField margin='normal' type='password' variant='outlined' placeholder='Password'/>
                {/* <TextField margin='normal' type={'date'} variant='outlined' placeholder='DOB'/> */}
                <Button sx={{marginTop:3}} variant='contained'  color='info'> Log in</Button>
                <br/>
                  <p className="ab25">
            {" "} 
            New user?
            <Link to="/registration"> Sign up </Link>
          </p>
        </Box>
        
      </form>
    </div>
  )
}

export default Login