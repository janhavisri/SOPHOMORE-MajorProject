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
<div class="row align-items-center justify-content-between">
            <div class="col-lg-6 mt-5 order-2 order-lg-1"><img class="img-fluid mx-auto d-block" src="https://themes.getbootstrap.com/wp-content/themes/bootstrap-marketplace/assets/images/official-themes/review-process.svg" alt=""/></div>
            <div class="col-lg-5 order-1 order-lg-2">
              <h1 class="mb-2 text-bold w-75">Python Programming</h1>
              <p class="fs-16 text-gray-soft"><strong>Python</strong> is the most popular programming language of the current times. Python has achieved this status because of its huge number of libraries and ease of use. <strong>Sophomore Python Program</strong> provides for you the best of python training so that you win the race to blaze the trails of success.</p>
            </div>
          </div>
  </div>
  
</div>



    )
};
export default Home;