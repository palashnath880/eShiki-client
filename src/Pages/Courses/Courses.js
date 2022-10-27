import React from 'react';
import { Outlet } from 'react-router-dom';
import CoursesSidebar from '../../components/CoursesSidebar/CoursesSidebar';

const Courses = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-col md:flex-row'>
                <div className='hidden md:block w-3/12'>
                    <CoursesSidebar />
                </div>
                <div className='flex-1'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Courses;
