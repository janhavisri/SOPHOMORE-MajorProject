import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import "./App.css";
import Admin from "./components/admin";
import Dashboard from "./components/admin/dashboard";
import ManageUser from "./components/admin/manageuser";
import Main from "./components/main";
import Signup from "./components/main/signup";
import Login from "./components/main/login";
import Home from "./components/main/home";
import AddCourse from "./components/admin/addcourse";
import Header from "./components/main/header";
import CourseDetail from "./components/main/coursedetail";
import ListCourses from "./components/main/listcourses";
import View from "./components/main/view";
import Contactus from "./components/main/contactus";
import User from "./components/user";
import UserDashboard from "./components/user/userdashboard";
import { CoursesProvider } from "./coursesContext";
import ViewCourse from "./components/main/viewcourse";
function App() {
  return (
    <div>
     
      <BrowserRouter>   
      <CoursesProvider>       
      <Header></Header>
        <Routes>
      

          <Route element={<Admin />} path="admin">
            <Route element={<Dashboard />} path="dashboard" />
            <Route element={<ListCourses />} path="listcourses" />
            <Route element={<View />} path="view" />
            <Route element={<AddCourse />} path="addcourse" />
            <Route element={<ManageUser />} path="manageuser" />
            {/* <Route element={<Footer/>} path="footer"/> */}
            {/* <Route element={<Header/>} path="header"/>  */}
          </Route>
          
          <Route element={<Main />} path="main">
            <Route element={<ListCourses />} path="listcourses" />
            <Route element={<Signup />} path="signup" />
            <Route element={<Login />} path="login" />
            <Route element={<Home />} path="home" />
            <Route element={<Contactus />} path="contactus" />
            {/* <Route element={<Header />} path="header" /> */}
            <Route element={<CourseDetail />} path="coursedetail" />
            <Route element={<ViewCourse />} path="viewcourse/:id" />
           
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