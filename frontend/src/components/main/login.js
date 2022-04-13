import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import "../stylesheets/login.css";
import { Formik } from "formik";
import Swal from "sweetalert2";
import app_config from "../../config";


const Signup=()=> {
  const url = app_config.api_url;
  
  
 
  const loginform = {
      email: '',
      password: ''
  }
 
  const formSubmit = (values) => {
 
      fetch(url + 'user/getbyemail/' + values.email)
          .then(res => res.json())
          .then(data => {
              if (data) {
                  console.log(data);
 
                  if (data.password == values.password) {
                      console.log('login success');
 
                      Swal.fire({
                          icon: 'success',
                          title: 'Login Success',
                      })
 
                      // sessionStorage.setItem('user', JSON.stringify(data));
                      // window.location.replace('/about');
 
                      return
                  }
              }
 
              Swal.fire({
                  icon: 'error',
                  title: 'Email or Password Incorrect'
              })
 
          })
        }
  return (
      <div>
          
    {/* <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        mx:'250px',
        '& > :not(style)': {
          m: 10,
          width: 1000,
          height: 600,
        },
      }}
    >
      
      <Paper elevation={6} >   */}
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        mx:'520px',
        '& > :not(style)': {
          m: 3,
          // mt:3,
          width: 500,
          height: 550,
        },
      }}
    >
      
      <Paper elevation={16} >
        
      <Formik initialValues={loginform} onSubmit={formSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
          {/* <Avatar sx={{ m: 5,mx:40, bgcolor: 'secondary.main' }}> */}
      <h1 class="h1">Welcome!</h1>
<h3 class="h3">SignIn to your account</h3>

<form>
<div class="form-field">
      <label for="email">Email</label>
       <input type="email" name="email" onChange={handleChange} value={values.email} />
    </div> 
     
    <div class="form-field">
      <label for="password">Password</label>
    <input type="password" name="password" onChange={handleChange} value={values.password} />
   </div>
    
   <div class="form-field"> 
   <a href="" class="link">Forget Password?</a>
    <button type="submit" class="login-btn">Login</button>
   
    </div> 
 
    </form>
   
    </form>
                )}
                </Formik>
      </Paper>   
     </Box>
      {/* </Paper>
    </Box> */}
    
    </div>
    
  );
}
export default Signup;