import { Container, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import app_config from "../../config";
import "../stylesheets/view.css";
  import thumbnail from "../../images/thumbnail.png";
  import created from "../../images/created.png";
 import valueaddition from "../../images/valueaddition.png";


const View = () => {
  const { id } = useParams();
  const url = app_config.api_url;
  const [coursesData, setCoursesData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(id);
    fetch(url + "course/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCoursesData(data);
        setLoading(false);
      });
  }, []);

  const showCourses = () => {
    if (loading) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="portview">
          <Container
            style={{
              background: "white",
              boxShadow:
                "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
            }}
          >
            <Grid container>
              <Grid item md={6} style={{ marginTop: "auto", padding: "5rem" }}>
                <h1 className="title">{coursesData.title}</h1>
                <p className="desc">{coursesData.description}</p>
              </Grid>

             
            </Grid>
            <hr />
            <section className="thumb container">
              <h1 className="section-title">Thumbnail</h1>
              <Grid container>
                <Grid item md={4}>
                  <img className="img-fluid" src={thumbnail} alt="" />
                </Grid>
                <Grid item md={4} style={{ padding: "5rem" }}>
                  <p className="detail">{coursesData.thumbnail}</p>
                </Grid>
              </Grid>
            </section>
            <Grid item md={4}>
                <img
                  className="img-fluid"
                  src={url + "/" + coursesData.heroimage}
                  alt=""
                />
              </Grid>

            <hr />
            <section className="created container">
              <h1 className="section-title">Created</h1>
              <Grid container>
                <Grid item md={4}>
                  <img className="img-fluid" src={created} alt="" />
                </Grid>
                <Grid item md={4} style={{ padding: "5rem" }}>
                  <p className="detail">{coursesData.created}</p>
                </Grid>
              </Grid>
            </section>
            <hr />
            <section className="valueaddition container">
              <h1 className="section-title">ValueAddition</h1>
              <Grid container>
                <Grid item md={4}>
                  <img className="img-fluid" src={valueaddition} alt="" />
                </Grid>
                <Grid item md={4} style={{ padding: "5rem" }}>
                  <p className="detail">{coursesData.valueaddition}</p>
                </Grid>
              </Grid>
            </section>
          </Container>
        </div>
      );
    }
  };

  return <div>{showCourses()}</div>;
};

export default View;