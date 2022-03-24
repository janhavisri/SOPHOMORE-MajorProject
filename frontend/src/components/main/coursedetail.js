import "../stylesheets/coursedetail.css";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
const CourseDetail = () => {
    return (
      <div class="card bg-dark text-white">
      <img class="card-img" src="https://www.amazingviralnews.com/wp-content/uploads/2020/12/Why-Python-programming.jpg" alt="Card image"/>
      <div class="card-img-overlay">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text">Last updated 3 mins ago</p>
        
      </div>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 3,
          width: 3000,
          height: 300,
        },
      }}
    >

      <Paper elevation={16} >
        {/* <div className="span"> */}
      {/* <span>300+</span><h5>Coded Elements</h5> */}
      {/* <span>300+</span><h5>Coded Elements</h5> */}

      {/* </div> */}
      </Paper>
    </Box>
    <div class="card-group">
  <div class="card">
    <img class="card-img-top" src="https://cdn.wccftech.com/wp-content/uploads/2017/07/Python-Programming-Bootcamp.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://cdn.wccftech.com/wp-content/uploads/2017/07/Python-Programming-Bootcamp.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://cdn.wccftech.com/wp-content/uploads/2017/07/Python-Programming-Bootcamp.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>

  </div>
  <div class="card">
    <img class="card-img-top" src="https://cdn.wccftech.com/wp-content/uploads/2017/07/Python-Programming-Bootcamp.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
</div>
</div>
  
    </div>
    )
};
export default CourseDetail;