import { Card, Button, CardContent, CircularProgress, CardMedia } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import app_config from "../../config";
import { CoursesContext } from "../../coursesContext";


const CoursesDetail = props => {

    const url = app_config.api_url;

    return (
        <Card>
            <CardMedia image={url + props.coursesData.heroimage} style={{ height: '18rem' }}>

            </CardMedia>
            <CardContent>
                <h3>{props.coursesData.title}</h3>
                {/* <p className="text-muted">{props.portfolioData.fullname}</p> */}
                <p className="">{props.coursesData.thumbnail}</p>

                <Button component={Link} to={'/main/view/' + props.coursesData._id} variant="contained" className="mt-2" color="primary">View </Button>
            </CardContent>
        </Card>
    )
}


const ListCourses = () => {

    const url = app_config.api_url;

    const [coursesList, setCoursesList, loading, setLoading] = useContext(CoursesContext);

    useEffect(() => {
        fetch(url + 'course/getall')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCoursesList(data);
                setLoading(false);
            })
    }, [])


    const showCoursesList = () => {
        if (loading) {
            return <CircularProgress color="primary" />
        } else {
            return <div className="row">
                {
                    coursesList.map((course) => {
                        return (
                            <div className="col-md-3">
                                <CoursesDetail coursesData={course} key={course._id}></CoursesDetail>
                            </div>
                        )
                    })
                }
            </div>
        }

    }

    return (
        <div className="container-fluid">
            <section className="" id="browse courses">

                <h2 className="text-center mt-4">List of Added Courses</h2>
                {/* <hr /> */}

                {showCoursesList()}
            </section>
        </div>
    )
}

export default ListCourses;