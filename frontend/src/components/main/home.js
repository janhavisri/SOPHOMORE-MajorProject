import "../stylesheets/home.css";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
//import Card from 'react-bootstrap/Card';

const Home = () => {
    return (
      <div class="bd-masthead mb-3" id="content">
  <div class="container px-4 px-md-3">
  <div class="col-8 mx-auto col-md-4 order-md-2 col-lg-5">
        <img  className="images"src="https://s3-cdnwhjr.whjr.online/website/desktop/master-banner-1x.png" width="600" height="360"  role="img" />
      </div>
    <div class="rowmx align-items-lg-center">
      <div class="col-8 mx-auto col-md-4 order-md-2 col-lg-5">
      </div>
      <div class="col-md-8 order-md-1 col-lg-7 text-center text-md-start">
        <h1 class="mb-3">Sophomore</h1><hr/>
        <p class="lead mb-4">
         We undertake the responsibility to open these parachutes and enhance their logical, adaptive and creative potentials through CODING - an aspect which has become a part of school curriculum.
        </p>
        <h3 class="lead mb-1">Childrens' minds are like a parachute.</h3>
        <h3 class="lead mb-1">They function only when they open.</h3>
        <div class="d-flex flex-column flex-md-row">
        {/* <a href="http://localhost:3000/" class="btn btn-lg btn-bd-primary mb-3 me-md-3" onclick="ga('send', 'event', 'Jumbotron actions', 'Get started', 'Get started');">Signup</a> */}
          
          <a href="http://localhost:3000/main/signup" class="btn btn-lg btn-bd-primary mb-3 me-md-3" onclick="ga('send', 'event', 'Jumbotron actions', 'Get started', 'Get started');">Signup</a>
          <a href="http://localhost:3000/main/login"class="btn btn-lg btn-outline-secondary mb-3" onclick="ga('send', 'event', 'Jumbotron actions', 'Download', 'Download 5.1.3');">Login</a>
        
        </div>
      
        
      </div>
      
    </div>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          backgroundColor: 'skyblue',
          m: 2,
          width: 1300,
          height: 300,
        },
      }}
    >

      <Paper elevation={8} >
  
    <div class="row" >
                <div class="col-sm-12 mt-5 mb-4">
                    <div class="text-center">
                        <h1 class="text-black">Courses</h1>
                        <h4 class="h4" >Sophomore provides you various courses for students including</h4>
                    </div>
                </div>
                <div class="col-md-3" >
                    <div class="card text-dark text-center ">
                        <div class="card-body"><a href="http://localhost:3000/main/viewcourse" class="nav-link"><i class="fas fa-chart-bar"  aria-hidden="true"></i>&nbsp; Python Programming</a></div>
                    </div>
                </div>
                <div class="col-md-3" >
                    <div class="card text-dark text-center ">
                        <div class="card-body"><a href="http://localhost:3000/main/viewcourse" class="nav-link" ><i class="fab fa-python" aria-hidden="true"></i>&nbsp; Java Programming</a></div>
                    </div>
                </div>
                <div class="col-md-3" >
                    <div class="card text-dark text-center ">
                        <div class="card-body" ><a href="http://localhost:3000/main/viewcourse" class="nav-link" ><i class="fab fa-python" aria-hidden="true"></i>&nbsp; Web Development</a></div>
                    </div>
                </div>
                <div class="col-md-3" >
                    <div class="card text-dark text-center ">
                        <div class="card-body" ><a href="http://localhost:3000/main/viewcourse" class="nav-link"><i class="devicon-java-plain"></i>&nbsp; Game Development</a>
                        </div>
                        
                        
                    </div>


                </div>
                
                
  
</div>

</Paper>
</Box>

{/* <div class="row align-items-center justify-content-between">
            <div class="col-lg-6 mt-5 order-2 order-lg-1"><img class="img-fluid mx-auto d-block" src="https://themes.getbootstrap.com/wp-content/themes/bootstrap-marketplace/assets/images/official-themes/review-process.svg" alt=""/></div>
            <div class="col-lg-5 order-1 order-lg-2">
              <h1 class="mb-2 text-bold w-75">Python Programming</h1>
              <p class="fs-16 text-gray-soft"><strong>Python</strong> is the most popular programming language of the current times. Python has achieved this status because of its huge number of libraries and ease of use. <strong>Sophomore Python Program</strong> provides for you the best of python training so that you win the race to blaze the trails of success.</p>
            </div>
          </div>
         */}
         <img class="ig"src="https://www.vedantu.com/cdn/images/new-home-page/icons/graph-chart-icon.svg"></img><div class="h2">
    <h2>Impact, at <strong class="color">Scale</strong> </h2>
    <h5>Making education affordable and accessible across the globe</h5><hr/>

    <div class="style">
        <div class="div">
            <div class="Stats">
                <h2 class="Stats_">2.1+<br/>crore</h2><p class="Stats_b2">hours of LIVE learning</p></div></div><div class=""><div class="stt"><h2 class="Stats_b2V">10+<br/>lakh</h2><p class="Stat">monthly youtube views</p></div></div><div class="sttts"><div class="Stats_sin"><h2 class="Stats_b2Va"> 25+<br/>lakh</h2><p class="Stats_b2Variant">doubts resolved on the app</p></div></div><div class="px"><div class="Stats_singleStatSection"><h2 class="Stats_b2Variant__">57+<br/>countries</h2><p class="Stats_b2Variant__PyK99">where students take LIVE classes</p></div></div></div>
                <img class="src"src=" https://www.vedantu.com/cdn/images/new-home-page/B2/stats-map.png"></img>
    </div>
    
    <section id="team">
      
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-9 p-5 mt-2 mb-2">
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
  
</div>


    )
};
export default Home;