import React, { createContext, useEffect, useState } from 'react';

export const CourseContext = createContext();

const CoursesContext = ({ children }) => {

    const [courses, setCourses] = useState(null);
    const [courseCategory, setCourseCategory] = useState(null);

    const coursesFetcher = async () => {
        const res = await fetch(`https://eshiki-server-side.vercel.app`);
        const data = await res.json();
        setCourses(data);
    }

    const categoryFetcher = async () => {
        const res = await fetch(`https://eshiki-server-side.vercel.app/categories`);
        const data = await res.json();
        setCourseCategory(data);
    }

    useEffect(() => {

        categoryFetcher();
        coursesFetcher();

    }, [])

    return (
        <CourseContext.Provider value={{ courses, courseCategory }}>
            {children}
        </CourseContext.Provider>
    );
}

export default CoursesContext;
