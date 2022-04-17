import "../stylesheets/header.css";
import React, { useState } from "react";
import Signup from "./signup";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { CoursesContext } from "../../coursesContext";

const Header = (props) => {
  const [signupOpen, setSignupOpen] = useState(false);
  const currentUser = sessionStorage.getItem("user");
  const [coursesList, setCoursesList, loading, setLoading] =
    useContext(CoursesContext);

  const logout = () => {
    sessionStorage.removeItem("user");
    window.location.replace("./main/login");
  };

  const showLoggedIn = () => {
    if (currentUser) {
      return (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="../main/addcourse">
              Add Courses
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/manage">
              Manage
            </Link>
          </li> */}

          <li className="nav-item">
            <button onClick={logout} className="btn btn-danger">
              Logout
            </button>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to="./main/login" activeClassName="active">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="./main/signup" activeClassName="active">
              Signup
            </NavLink>
          </li>
        </>
      );
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="./main/home">
          Sophomore
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="../admin/listcourses"
              >
                Browse Courses
              </NavLink>
            </li>
            {showLoggedIn()}
          </ul>
        </div>
      </div>
    </nav>
  )
return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="./main/home">
          Sophomore
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>

            {/* <li class="nav-item">
              <a class="nav-link" href="#pricing">
                Pricing
              </a>
            </li> */}
            <li class="nav-item">
              <a class="nav-link" href="/listcourses">
                Browse Courses
              </a>
            </li>

            {showLoggedIn()}

            <NavLink to="./main/signup" activeClassName="">
              Signup
            </NavLink>
            {signupOpen && <Signup setOpenSignup={setSignupOpen} />}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
