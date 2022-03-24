
 import "../stylesheets/signup.css";
 import * as React from 'react';
 //import Avatar from '@mui/material/Avatar';
 import Button from '@mui/material/Button';
 import TextField from '@mui/material/TextField';
 //import Link from '@mui/material/Link';
 import Grid from '@mui/material/Grid';
 import Box from '@mui/material/Box';
 import Paper from '@mui/material/Paper';
 import { Formik } from "formik";
 import Swal from "sweetalert2";
 import app_config from "../../config";
 import { useState } from "react";
    function AddCourse({ setOpenAddCourse }) {
        // const url = app_config.api_url;
        const [hero, setHero] = useState("");
        const [courseFile, setCourseFile] = useState("");
   const url = app_config.api_url;
 
   const courseform = {
     title: "",
     description: "",
     thumbnail: "",
     images: "",
     created: new Date,
     valueAddition: "",

   };
   const formSubmit = (values) => {
    console.log(values);
    values.heroimage = hero;
    values.file = courseFile;

    const reqOp = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    fetch(url + "course/add", reqOp)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.message == "success") {
          Swal.fire({
            icon: "success",
            title: "Added Successfully!!",
          });
        }
      });
  };

//   const uploadheroimage = (event) => {
//     const formdata = new FormData();
//     formdata.append("file", event.target.files[0]);

//     const reqOptions = {
//       method: "POST",
//       body: formdata,
//     };
//   };
//   fetch(url + "util/addfile", reqOptions)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     setHero(event.target.files[0].name);
//   });
// const uploadfile = (event) => {
// const formdata = new FormData();
// formdata.append("file", event.target.files[0]);

// const reqOptions = {
//   method: "POST",
//   body: formdata,
// };

// fetch(url + "util/createfile", reqOptions)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     setCourseFile(event.target.files[0].name);
//   });
// };

   return (
     
         <div>
         <Box
       sx={{
         display: 'flex',
         flexWrap: 'wrap',
         mx:'330px',
         '& > :not(style)': {
        //    m: 20,
           width: 900,
           height: 730,
         },
       }}
     >
   <Paper elevation={8} >
   <Formik initialValues={courseform} onSubmit={formSubmit}>
                 {({ values, handleChange, handleSubmit }) => (
                   <form onSubmit={handleSubmit}>
           {/* <Avatar sx={{ m: 5,mx:40, bgcolor: 'secondary.main' }}> */}
             {/* <LockOutlinedIcon /> */}
           {/* </Avatar> */}
           <TextField
                  className="w-100 mt-4"
                  label="Title"
                  variant="filled"
                  id="title"
                  onChange={handleChange}
                  value={values.title}
                required></TextField>
                <TextField
                  multiline
                  rows={5}
                  className="w-100 mt-4"
                  label="Description"
                  variant="filled"
                  id="description"
                  onChange={handleChange}
                  value={values.description}
                required></TextField>
               
                <TextField
                  className="w-100 mt-4"
                  label="Thumbnail"
                  variant="filled"
                  id="thumbnail"
                  onChange={handleChange}
                  value={values.thumbnail}
               ></TextField>
                <input
                // className="w-80 mt-4"
                  // onChange={uploadheroimage}
                  type="file"
                  className="form-control mt-4 mx-1"
                  title="Select heroimage"
                required/>
                <TextField
                  className="w-100 mt-4"
                  label="Created"
                  variant="filled"
                  id="created"
                  onChange={handleChange}
                  value={values.created}
               ></TextField>
                <TextField
                  className="w-100 mt-4"
                  label="Value Addition"
                  variant="filled"
                  id="valueaddition"
                  onChange={handleChange}
                  value={values.valueaddition}
               required ></TextField>
                
             <Button
               type="submit"
               variant="contained"
             id="pp"
               sx={{  mt: 5, mb: 0 }}
             >
               Add
             </Button>
             <Grid container justifyContent="flex-end">
               <Grid item mx={27}>
                 {/* <Link href="#" variant="body2">
                   Already have an account? Sign in
                 </Link> */}
               </Grid>
             </Grid>
             </form>
                 )}
                 </Formik>
             </Paper>
           </Box>
 {/* 
           <button  href="" className="openModalbtn" onClick={()=>{
             setModalOpen(true);
         }}>Login</button>
         {modalOpen && <Model setOpenModal={setModalOpen}/>} */}
        
       </div>
      
     
 
 );
 }
 export default AddCourse;