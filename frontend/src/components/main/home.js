import "../stylesheets/home.css";
//import Box from '@mui/material/Box';
//import Paper from '@mui/material/Paper';
import web from "../../images/girl-and-books.webp";
import { NavLink } from "react-router-dom";
import AddCourse from "./addcourse";
import React, { useState } from "react";
//import Card from 'react-bootstrap/Card';

const Home = () => {
    const[addcourseOpen, setOpenAddCourse] = useState(false);
    return (
        <div>
        <section id ="header" className="d-flex align-items-center">
            <div class="container-fluid nav_bg">
                <div class="row">
                    <div class="col-10 mx-auto">
                        <div class="row">
                        <div class="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1> 
                                Grow your children mind with
                                <strong class="brand-name"> Sophomore </strong>
                                </h1>
                            <h2 class="my-3">We undertake the responsibility to open these parachutes </h2>
                            <div class="mt-3">
                            <NavLink
        to="/"
        className="openAddCourse btn-get-started"
        onClick={() => {
          setOpenAddCourse(true);
        }}
      >
        Get Started
      </NavLink>
      {addcourseOpen && <AddCourse setAddCourseOpen={setOpenAddCourse} />}

                           
                                {/* <NavLink to="/" class="btn-get-started">Get Started</NavLink> */}
                            </div>
                        </div>
                        <div class="col-lg-5 order-1 order-lg-2 header-img">
                            <img src={web} class="img-fluid animated" alt="home img"></img>
                        </div>
                        
                    </div>
                    
                    </div>
                    
                    
            </div>    
            
            </div> 
        </section>
        <div class="scale">
        {/* <img class="ig"src="https://www.vedantu.com/cdn/images/new-home-page/icons/graph-chart-icon.svg"></img><div class="h2"> */}
    <h2>Impact, at <strong class="color">Scale</strong> </h2>
    <h5>Making education affordable and accessible across the globe</h5><hr/>
    

        <div class="style">
        <div class="div">
            <div class="Stats">
                <h2 class="Stats_">2.1+<br/>crore</h2><p class="Stats_b2">hours of LIVE learning</p></div></div><div class=""><div class="stt"><h2 class="Stats_b2V">10+<br/>lakh</h2><p class="Stat">monthly youtube views</p></div></div><div class="sttts"><div class="Stats_sin"><h2 class="Stats_b2Va"> 25+<br/>lakh</h2><p class="Stats_b2Variant">doubts resolved on the app</p></div></div><div class="px"><div class="Stats_singleStatSection"><h2 class="Stats_b2Variant__">57+<br/>countries</h2><p class="Stats_b2Variant__PyK99">where students take LIVE classes</p></div></div></div>
                <img class="src"src=" https://www.vedantu.com/cdn/images/new-home-page/B2/stats-map.png"></img>
    </div>
      <section id ="course" class="center">
    <h1 class="brand">Our
    Courses </h1>
                               
    <div class="row">
        
        <div class="col-md-2 offset-md-1">
            
            <div class="card">
                <img src="https://www.vedantu.com/cdn/images/new-home-page/B2/coding-classes.svg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title 11</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        <div class="col-md-2">
            <div class="card">
                <img src="https://www.vedantu.com/cdn/images/new-home-page/B2/coding-classes.svg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        <div class="col-md-2">
            <div class="card">
                <img src="https://www.vedantu.com/cdn/images/new-home-page/B2/coding-classes.svg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        <div class="col-md-2">
            <div class="card">
                <img src="https://www.vedantu.com/cdn/images/new-home-page/B2/coding-classes.svg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>

    </div>
</section>
    {/* <section id ="course" className="d-flex align-items-center">
    <div class="row">
        <div class="col-md-2 offset-md-1">
            

              
                                <h1 class="brand"> Our <strong> Courses</strong>
                                </h1>
                                <div class="col-md-2">
                                <div class="cards"><div class="md:flex items-start" ><div class="block md:hidden item"><img loading="lazy" src="https://www.vedantu.com/cdn/images/new-home-page/B2/coding-classes.svg" alt="special-course"/></div><div class=""><div class="SpCourseTile_title__12qhk" >Class 6 - 12</div><h3><a target="_blank" href="https://www.vedantu.com/supercoders?utm_source=Homepage&amp;utm_medium=Special_Course&amp;utm_campaign=Homepage_VarB2&amp;utm_content=Coding_classes" class="a">Coding classes</a></h3><p>Learn to build apps and games, be future ready</p><button type="button" class="btn-item ">Explore</button></div></div></div>
                                </div>
                                <div class="cards">
                                <div class=""><div class="md:flex items-start " ><div class="block md:hidden item"><img loading="lazy" src="https://www.vedantu.com/cdn/images/new-home-page/B2/coding-classes.svg" alt="special-course"/></div><div class=""><div class="SpCourseTile_title__12qhk" >Class 6 - 12</div><h3><a target="_blank" href="https://www.vedantu.com/supercoders?utm_source=Homepage&amp;utm_medium=Special_Course&amp;utm_campaign=Homepage_VarB2&amp;utm_content=Coding_classes" class="a">Coding classes</a></h3><p>Learn to build apps and games, be future ready</p><button type="button" class=" btn-item ">Explore</button></div></div>
                                </div>
                                </div>
                                </div>
                                {/* </div> */}
                                {/* </div> */}
                                {/* </div> */}
                                {/* </div> */}
              {/* </section> */} 
    <section id="team">
      
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-9 p-5 mt-2 mb-4">
                {/* <h1 data-wow-delay="200ms" class="wow fadeIn text-white about-heading text-center" >
                    Our Team
                </h1> */}<h2 data-wow-delay="200ms" class="wow fadeIn text-yellow about-heading text-center">Meet <strong class="color">Teachers</strong> </h2>

            </div>
        </div>
       
        <div class="row">
            <div class="col-md-4 col-sm-6 text-center">
                <figure>
                    <img src="http://digipodium.com/public/images/team_members/zaid_circular.png" height="150"/>
                    <figcaption>
                        <div>
                            <h5 class="text-warning"><b>Zaid Kamil</b></h5>
                        </div>
                        <div>
                            <h5 class="text-black little-smaller">Google, Microsoft &amp; IBM Certified</h5>
                            <h5 class="text-black little-smaller">Android &amp; Python expert </h5>
                        </div>
                        <div>
                            <h5 class="text-black little-smaller">With more than 6 years of experience</h5>
                        </div>
                    </figcaption>

                </figure>
            </div>
            <div class="col-md-4 col-sm-6 text-center">
                <figure>
                    <img src="http://digipodium.com/public/images/team_members/bharvi_circular.png" height="150"/>
                    <figcaption>

                        <div>
                            <h5 class="text-warning"><b>Bharvi Sharma</b></h5>
                        </div>
                        <div>
                            <h5 class="text-black little-smaller">Google Certified</h5>
                            <h5 class="text-black little-smaller">Digital Marketing associate</h5>
                        </div>
                        <div>
                            <h5 class="text-balck little-smaller">With more than 5 years experience.</h5>
                        </div>
                    </figcaption>
                </figure>
            </div>
			<div class="col-md-4 col-sm-6 text-center">
                <figure>
                    <img src="http://digipodium.com/public/images/team_members/mubassir.png" height="150"/>
                    <figcaption>

                        <div>
                            <h5 class="text-warning"><b>Mohammad Mubassir</b></h5>
                        </div>
                        <div>
                            <h5 class="text-black little-smaller">Microsoft Certified</h5>
                            <h5 class="text-black little-smaller">Python &amp; Angular expert</h5>
                        </div>
                        <div>
                            <h5 class="text-black little-smaller">With more than 1 year experience.</h5>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>
    </div>
</section>

    </div>


    )
};
export default Home;