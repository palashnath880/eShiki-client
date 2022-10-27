import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CourseContext } from '../../contexts/CoursesContext';
import CourseItem from '../CourseItem/CourseItem';

const AllCourse = () => {
    const { courses, courseCategory } = useContext(CourseContext);
    return (
        <div className='px-5 my-10'>
            <div className='mb-5'>
                <p className='text-lg text-center border-b pb-2'>Category</p>
                <div className='flex flex-wrap gap-2 mt-3 justify-center'>
                    {
                        courseCategory && courseCategory.length > 0 ? courseCategory.map(item => <Link className='rounded px-2 py-2 bg-violet-500 text-slate-50' key={item?.id} to={`/category/${item?.id}`}>{item?.name}</Link>) : ''
                    }
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
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
