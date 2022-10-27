import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CourseContext } from '../../contexts/CoursesContext';
import CourseItem from '../CourseItem/CourseItem';

const OurCourses = () => {
    const { courses } = useContext(CourseContext);
    const slice3Course = courses !== null ? courses.slice(0, 3) : [];
    return (
        <div className='pb-10'>
            <div className='text-center border-b pb-5'>
                <h1 className='font-semibold text-3xl'>Our Courses</h1>
            </div>
            <div className='py-5 grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    slice3Course.length > 0 && slice3Course.map((course, index) => <CourseItem key={index} course={course} />)
                }
            </div>
            <div className='text-center my-10'>
                <Link to='/courses' className='bg-violet-500 px-7 py-3 border border-violet-500 duration-300 hover:bg-transparent hover:text-gray-700 text-slate-50'>All Courses</Link>
            </div>
        </div>
    );
}

export default OurCourses;
