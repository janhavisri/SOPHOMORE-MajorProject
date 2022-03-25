import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import "./App.css";
import Admin from "./components/admin";
import Dashboard from "./components/admin/dashboard";
import AddCourse from "./components/admin/addcourse";
import ListCourses from "./components/admin/listcourses";
import ViewCourses from "./components/admin/viewcourses";
import Main from "./components/main";
import Signup from "./components/main/signup";
import Login from "./components/main/login";
import Home from "./components/main/home";
import Header from "./components/main/header";
import CourseDetail from "./components/main/coursedetail";
import ViewCourse from "./components/main/viewcourse";
import User from "./components/user";
import UserDashboard from "./components/user/userdashboard";
//import { CoursesProvider } from "./coursesContext";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <CoursesProvider> */}
          <Route element={<Admin />} path="admin">
            <Route element={<Dashboard />} path="dashboard" />
            <Route element={<AddCourse />} path="addcourse" />
            <Route element={<ViewCourses />} path="viewcourses" />
            {/* <Route element={<Footer/>} path="footer"/> */}
            {/* <Route element={<Header/>} path="header"/>  */}
          </Route>
          <Route element={<Main />} path="main">
            <Route element={<ListCourses />} path="listcourses" />
            <Route element={<Signup />} path="signup" />
            <Route element={<Login />} path="login" />
            <Route element={<Home />} path="home" />
            <Route element={<Header />} path="header" />
            <Route element={<CourseDetail />} path="coursedetail" />
            <Route element={<ViewCourse />} path="viewcourse" />
            {/* <Route element={<ListCourses/>} path="listCourses"/> */}
          </Route>
          <Route element={<User />} path="user">
            <Route element={<UserDashboard />} path="userdashboard" />
          </Route>
          {/* <Route exact path="/">
            <Navigate to="/home"></Navigate>
          </Route> */}
          <Route path="/" element={<Navigate replace to="/home" />} />

          {/* </CoursesProvider> */}

        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;