import React, { useContext } from 'react';
import { CourseContext } from '../../contexts/CoursesContext';
import CourseItem from '../CourseItem/CourseItem';

const AllCourse = () => {
    const { courses } = useContext(CourseContext);
    return (
        <div className='px-5 my-10'>
            <div className='grid grid-cols-2 gap-4'>
                {
                    courses && courses.length > 0 ? courses.map((course, index) => <CourseItem key={index} course={course} />) : <>
                        <h2 className='py-3 text-center bg-red-200 text-red-500 rounded-md text-xl mt-10'>No Course Found</h2>
                    </>
                }
            </div>
        </div>
    );
}

export default AllCourse;
