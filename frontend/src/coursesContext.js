import { createContext, useState } from "react";

export const CoursesContext = createContext();

export const CoursesProvider = props => {

    const [coursesList, setCoursesList] = useState([]);
    const [loading, setLoading] = useState(true);

    return <CoursesContext.Provider value = {
            [coursesList, setCoursesList, loading, setLoading] } > { props.children } </CoursesContext.Provider>

}