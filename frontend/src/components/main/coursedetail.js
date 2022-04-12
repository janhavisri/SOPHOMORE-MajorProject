//import { useEffect, useState } from "react";
import "../stylesheets/coursedetail.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


  const CourseDetail = () => {
   return(
     
<div>

      <video class=
      "video"width="100%" height="650" autoPlay controls>
      <source src="https://cdn.sanity.io/files/599r6htc/production/4caa8274fa1a76f5df188b7969c41e2b00890801.mp4" type="video/mp4"/>
      {/* <source src="movie.ogg" type="video/ogg"/> */}
    </video>
    <div class="container-fluid bg-danger text-light p-5 text-center "><h1>All Courses</h1></div>
    <div className="register-photo">
    <div className="form-container">
        <div className="image-holder"></div>
        <form method="post">
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <div className="group"> <a href="http://localhost:3000/main/viewcourse" class="btn btn-lg btn-bd-primary mb-3 me-md-3" onclick="ga('send', 'event', 'Jumbotron actions', 'Get started', 'Get started');">View Course</a></div>
            {/* <div className="form-group"><button className="btn btn-success btn-block" type="submit">View Course</button></div> */}
        </form>
        
        
    </div>
</div>
<div className="photo">
    <div className="container">
        <div className="image"></div>
<form method="post">
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
{/*           
            <div className="group"><button className="btn btn-success btn-block" type="submit">View Course</button></div> */}
           <div className="group"> <a href="http://localhost:3000/main/viewcourse" class="btn btn-lg btn-bd-primary mb-3 me-md-3" onclick="ga('send', 'event', 'Jumbotron actions', 'Get started', 'Get started');">View Course</a></div>
        </form>

    </div>
    </div>
    <div className="phot">
    <div className="container">
        <div className="imag"></div>
<form method="post">
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <div className="group"> <a href="http://localhost:3000/main/viewcourse" class="btn btn-lg btn-bd-primary mb-3 me-md-3" onclick="ga('send', 'event', 'Jumbotron actions', 'Get started', 'Get started');">View Course</a></div>
           {/* <div className="grou"><button className="btn btn-success btn-block" type="submit">View Course</button></div> */}
        </form>

    </div>
    </div>
    <div className="pho">
    <div className="container">
        <div className="ima"></div>
        
<form method="pos">
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <div className="group"> <a href="http://localhost:3000/main/viewcourse" class="btn btn-lg btn-bd-primary mb-3 me-md-3" onclick="ga('send', 'event', 'Jumbotron actions', 'Get started', 'Get started');">View Course</a></div>
            {/* <div className="gro"><button className="btn btn-success btn-block" type="submit">View Course</button></div> */}
        </form>


    </div>
    <img class="ig"src="https://www.vedantu.com/cdn/images/new-home-page/icons/graph-chart-icon.svg"></img><div class="h2">
    <h2>Impact, at <strong class="color">Scale</strong> </h2>
    <h5>Making education affordable and accessible across the globe</h5><hr/>

    <div class="style">
        <div class="div">
            <div class="Stats">
                <h2 class="Stats_">2.1+<br/>crore</h2><p class="Stats_b2">hours of LIVE learning</p></div></div><div class=""><div class="stt"><h2 class="Stats_b2V">10+<br/>lakh</h2><p class="Stat">monthly youtube views</p></div></div><div class="sttts"><div class="Stats_sin"><h2 class="Stats_b2Va"> 25+<br/>lakh</h2><p class="Stats_b2Variant">doubts resolved on the app</p></div></div><div class="px"><div class="Stats_singleStatSection"><h2 class="Stats_b2Variant__">57+<br/>countries</h2><p class="Stats_b2Variant__PyK99">where students take LIVE classes</p></div></div></div>
                <img class="src"src=" https://www.vedantu.com/cdn/images/new-home-page/B2/stats-map.png"></img>
    </div>
    
    <h1 class="why">Why SOPHOMORE?</h1>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 208,
          height: 178,
        },
      }}
    >

      <Paper elevation={3} >
          <img class="class"src="https://www.whitehatjr.com/music/media/why-create-with-music/one-one.svg"></img>
          <h6>1:1 classes by trained art teachers</h6>
      </Paper>
      </Box>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          marginLeft:35,
          marginTop:-23.5,
          width: 208,
          height: 178,
        },
      }}
    >

      <Paper elevation={3} >
          <img class="class"src="https://www.whitehatjr.com/music/media/why-create-with-music/one-one.svg"></img>
          <h6>1:1 classes by trained art teachers</h6>
      </Paper>
      </Box> <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          marginLeft:69,
          marginTop:-23.4,
          width: 208,
          height: 178,
        },
      }}
    >

      <Paper elevation={3} >
          <img class="class"src="https://www.whitehatjr.com/music/media/why-create-with-music/one-one.svg"></img>
          <h6>1:1 classes by trained art teachers</h6>
      </Paper>
      </Box>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          marginLeft:103,
          marginTop:-23.4,
          width: 208,
          height: 178,
        },
      }}
    >

      <Paper elevation={3} >
          <img class="class"src="https://www.whitehatjr.com/music/media/why-create-with-music/one-one.svg"></img>
          <h6>1:1 classes by trained art teachers</h6>
      </Paper>
      </Box>
      {/* <div class="group"> <a href="http://localhost:3000/main/viewcourse" class="btn btn-lg btn-bd-primary mb-3 me-md-3" onclick="ga('send', 'event', 'Jumbotron actions', 'Get started', 'Get started');">View Course</a></div> */}
    </div>
    </div>

    

)
}

export default CourseDetail;




