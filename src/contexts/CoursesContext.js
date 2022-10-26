import React, { createContext, useEffect, useState } from 'react';

export const CourseContext = createContext();

const CoursesContext = ({ children }) => {

    const [courses, setCourses] = useState(null);
    const [courseCategory, setCourseCategory] = useState(null);

    useEffect(() => {
        // load category
        fetch(`https://eshiki-server-side.vercel.app/categories`)
            .then(res => res.json())
            .then(data => setCourseCategory(data))
            .catch(error => console.error(error));

        // load course
        fetch(`https://eshiki-server-side.vercel.app`)
            .then(res => res.json())
            .then(data => setCourses(data))
            .catch(error => console.error(error));


    }, [])

    return (
        <CourseContext.Provider value={{ courses, courseCategory }}>
            {children}
        </CourseContext.Provider>
    );
}

export default CoursesContext;
