import { Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import app_config from "../../config";
import Update from "./update";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ManageUser = () => {
  const url = app_config.api_url;

  const [coursesData, setCoursesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({});

  const fetchData = () => {
    fetch(url + 'course/getall')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCoursesData(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = (id) => {
    fetch(url + "course/delete/" + id, { method: "DELETE" })
    .then((res) => {
      console.log(res.status);
      fetchData();
    });
  };

  const updateData = (form) => {
    setShowForm(true);
    setFormData(form);
  };

  const displayUpdateForm = () => {
    if (showForm) {
      return <Update formdata={formData}></Update>;
    }
  };

  const displayCourses = () => {
    if (!loading) {
      return coursesData.map(({_id,title,description,thumbnail,heroimage, created,valueaddition, course}) => (
        <tr>
          <td>{course.firstname}</td>
          <td>{new Date(course.created).toLocaleDateString()}</td>
          <td>
            <button
              onClick={(e) => deleteData(course._id)}
              className="btn btn-danger"
            >
              <i class="fas fa-trash"></i>
            </button>
          </td>
          <td>
            <button className="btn btn-primary" onClick={updateData}>
              <i class="fas fa-pen"></i>
            </button>
          </td>
        </tr>
      ));
    }
  };

  return (
    <Container>
      <h1 className="text-center">Manage Your User</h1>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          
          <Typography>Manage</Typography>
        </AccordionSummary>
      {/* <table className="table table-dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Created on</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{displayCourses()}</tbody>
      </table> */}
      <div className="mt-5">{displayUpdateForm()}</div>
      </Accordion>
    </Container>
  );
};

export default ManageUser;