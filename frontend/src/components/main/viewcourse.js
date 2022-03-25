import "../stylesheets/viewcourse.css";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const ViewCourse =()=> {
    return (
<div class="row">
    <div class="col-sm-6">
        <div class="">
            <div class="p-5"><div>
            <img src="https://softwarelozi.com/wp-content/uploads/2021/01/What-are-Web-development-services.jpg" class="img-fluid" alt="img"/></div></div></div></div><div class="col-sm-6"><div><div class="p-5">
                <h1 class=" text-center ">Web Development</h1>
                {/* <h4 class="text-center">Every Developer a basic understanding of HTML, CSS and JAVASCRIPT</h4><h4 class="text-center">Responsive Web Design is used in all types of modern web development</h4><hr/> */}
                <hr/>
                <h4 class="text-center">Every Developer a basic understanding of HTML, CSS and JAVASCRIPT</h4><h4 class="text-center">Responsive Web Design is used in all types of modern web development</h4>
                <h4>
                
                <ul>
                    <li>HTML for basic structure of sites.</li>
                    <li>CSS is used to control presentation, formatting and layout.</li>
                    <li>JAVASCRIPT is used to control the behaviour of different elements.</li>
                </ul>
                </h4>
                
                {/* <h4 class=" text-center">Now stream all Episode of Loki available on Disney+ hotstar</h4><hr/><p class="">Loki is an American television series created by Michael Waldron for the streaming service Disney+, based on Marvel Comics featuring the character of the same name. It is the third television series in the Marvel Cinematic Universe (MCU) produced by Marvel Studios, sharing continuity with the films of the franchise. The series takes place after the events of the film Avengers: Endgame (2019), in which an alternate version of Loki created a new timeline. Waldron serves as head writer, with Kate Herron directing for the first season. Loki premiered on June 9, 2021. Its first season, consisting of six episodes, concluded on July 14 and is part of Phase Four of the MCU. It received positive reviews, with praise for the performances, musical score, and visuals. A second season is in development</p> */}
            
                </div></div>
                </div>
                <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 2,
          marginLeft:30,
          width: 1100,
          height: 240,
        },
      }}
    >
      <Paper elevation={16} >
          <div className="row-left">
          <h1 class="h">Your Child Will Learn</h1>
<img class="img"src="https://cdn-icons-png.flaticon.com/128/2721/2721291.png">
</img>
<p>Responsive web design</p>
<img class="imga"src="https://cdn-icons-png.flaticon.com/128/3938/3938598.png">
</img>
<p class="p">Animation Effect</p>
<img class="imgag"src="https://cdn-icons.flaticon.com/png/128/1084/premium/1084269.png?token=exp=1648223966~hmac=ccff754d758206134865e6006b407667">
</img>
<p class="pa">Multimedia Website</p>
<img class="imgage"src="https://cdn-icons-png.flaticon.com/128/1322/1322104.png">
</img>
<p class="paa">Host Website on Github</p>
<img class="imgages"src="https://cdn-icons-png.flaticon.com/128/854/854878.png">
</img>
<p class="paaa">Adding maps in website</p>
<img class="imgagess"src="https://cdn-icons.flaticon.com/png/128/3494/premium/3494099.png?token=exp=1648224700~hmac=c661473c443fe13a0a3c969f6688baaf">
</img>
<p class="paaaa">Dynamic Website</p>
</div>
      </Paper>
      </Box>
                </div>
                
    )
};
export default ViewCourse;