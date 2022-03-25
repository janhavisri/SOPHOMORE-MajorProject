//import { useEffect, useState } from "react";
import "../stylesheets/coursedetail.css";
import * as React from 'react';
//import Box from '@mui/material/Box';
//import Rating from '@mui/material/Rating';
  

  const CourseDetail = () => {
   return(
     
<div>
 {/* <video src="https://j.gifs.com/GZOkBQ.gif" loop="" autoplay=""  ></video>
    <div class="textBox">
      <h2 class=".heading_2"><span class="spann">Avengers</span> Endgame</h2>
      <p>After the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the effarts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must Assemble once more in order to undo Thanos actions and restore order to the universe once and foe all, no matter what consequences may be in store.</p>
      <a href="#">Watch trailler now</a></div>
      </div>  */}
      <video class=
      "video"width="80%" height="600" autoPlay controls>
      <source src="https://cdn.sanity.io/files/599r6htc/production/4caa8274fa1a76f5df188b7969c41e2b00890801.mp4" type="video/mp4"/>
      {/* <source src="movie.ogg" type="video/ogg"/> */}
    </video>
    <div class="container-fluid bg-danger text-light p-5 text-center "><h1>All Courses</h1></div>
    <div className="register-photo">
    <div className="form-container">
        <div className="image-holder"></div>
        <form method="post">
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          
            <div className="form-group"><button className="btn btn-success btn-block" type="submit">View Course</button></div>
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
          
            <div className="grou"><button className="btn btn-success btn-block" type="submit">View Course</button></div>
        </form>

    </div>
    </div>
    <div className="pho">
    <div className="container">
        <div className="ima"></div>
<form method="pos">
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          
            <div className="gro"><button className="btn btn-success btn-block" type="submit">View Course</button></div>
        </form>

    </div>
    </div>

    </div>
)
}

export default CourseDetail;




