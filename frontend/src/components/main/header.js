import * as React from 'react';
import './header.css';
import '../stylesheets/header.css';



export default function Header() {
  return (
    
<nav class="navbar navbar-expand-lg navbar-light bg-light">

  <div class="container-fluid">
    <a class="navbar-brand" href="#">Sophomore</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="http://localhost:3000/main/home">Home</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="http://localhost:3000/main/viewcourse">Game Development</a></li>
            <li><a class="dropdown-item" href="http://localhost:3000/main/viewcourse">App Development</a></li>
            {/* <li><hr class="dropdown-divider"></li> */}
            <li><a class="dropdown-item" href="http://localhost:3000/main/viewcourse">Java Programmming</a></li>
            <li><a class="dropdown-item" href="http://localhost:3000/main/viewcourse">Web Development</a></li>
          </ul>
        </li>
      </ul>

      <form class="d-flex">
        {/* <a href="http://localhost:3000/main/login">
        <button class="btn btn-outline-success" type="submit">Login</button></a> */}
         <a href="http://localhost:3000/main/login"class="btn btn-lg btn-outline-secondary mb-1" onclick="ga('send', 'event', 'Jumbotron actions', 'Download', 'Download 5.1.3');">Login</a>
      </form>
    </div>
    </div>
  {/* </div> */}
</nav>
  );
}
