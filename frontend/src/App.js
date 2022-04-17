import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import "./App.css";
import Admin from "./components/admin";
import Dashboard from "./components/admin/dashboard";
import Main from "./components/main";
import Signup from "./components/main/signup";
import Login from "./components/main/login";
import Home from "./components/main/home";
import AddCourse from "./components/main/addcourse";
import Header from "./components/main/header";
import CourseDetail from "./components/main/coursedetail";
import ViewCourse from "./components/main/viewcourse";
import ListCourses from "./components/main/listcourses";
import ViewCourses from "./components/main/viewcourses";
import View from "./components/main/view";
import User from "./components/user";
import UserDashboard from "./components/user/userdashboard";
import { CoursesProvider } from "./coursesContext";
function App() {
  return (
    <div>
     
      <BrowserRouter>   
      <CoursesProvider>       
      <Header></Header>
        <Routes>
      

          <Route element={<Admin />} path="admin">
            <Route element={<Dashboard />} path="dashboard" />
            <Route element={<ViewCourses />} path="viewcourses" />
            <Route element={<ListCourses />} path="listcourses" />
            <Route element={<View />} path="view" />
            {/* <Route element={<Footer/>} path="footer"/> */}
            {/* <Route element={<Header/>} path="header"/>  */}
          </Route>
          <Route element={<Main />} path="main">
            <Route element={<ListCourses />} path="listcourses" />
            <Route element={<Signup />} path="signup" />
            <Route element={<Login />} path="login" />
            <Route element={<Home />} path="home" />
            <Route element={<AddCourse />} path="addcourse" />
            {/* <Route element={<Header />} path="header" /> */}
            <Route element={<CourseDetail />} path="coursedetail" />
            <Route element={<ViewCourse />} path="viewcourse" />
           
            {/* <Route element={<ListCourses/>} path="listCourses"/> */}
          </Route>
          <Route element={<User />} path="user">
            <Route element={<UserDashboard />} path="userdashboard" />
          </Route>
          {/* <Route exact path="/">
            <Navigate to="/home"></Navigate>
          </Route>
          <Route path="/" element={<Navigate replace to="/home" />} /> */}

          

        </Routes>
        </CoursesProvider> 
      </BrowserRouter>
     
    </div>
  );
}

export default App;