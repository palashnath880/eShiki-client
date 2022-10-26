import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { CourseContext } from '../../contexts/CoursesContext';

const SingleCourse = () => {
    const course = useLoaderData();
    const { courseCategory } = useContext(CourseContext);
    const { id, name, description, duration, thumbnail, totalEnroll, category, price } = course[0];
    const findCategory = courseCategory && courseCategory.find(item => parseInt(item.id) === parseInt(category));

    return (
        <div className='px-5 mt-5'>
            <div>
                <h4 className='text-2xl'>{name}</h4>
                <p className='mb-4 flex gap-4 font-semibold'>
                    <span>Category: <Link className='font-normal hover:underline' to={`/category/${findCategory?.id}`}>{findCategory?.name}</Link></span>
                    <span>Student: <span className='font-normal'>{totalEnroll}</span></span>
                    <span>Duration: <span className='font-normal'>{duration}</span></span>
                </p>
                <div className='flex gap-2'>
                    <div className='w-9/12'>
                        <div className='rounded-md overflow-hidden'>
                            <img src={thumbnail} alt='' />
                        </div>
                        <p className='mt-5'>{description}</p>
                    </div>
                    <div className='w-3/12 pt-10 rounded-md border px-1'>
                        <p className='flex mb-3 px-3 text-lg justify-between'>
                            <span>Price</span>
                            <span>&#2547; {price}</span>
                        </p>
                        <button className='mb-2 w-full text-center border border-violet-500 bg-violet-500 text-slate-50 py-2 hover:bg-transparent hover:text-gray-700 duration-300'>Add To Cart</button>
                        <button className='mb-2 w-full text-center border border-green-500 bg-green-500 text-slate-50 py-2 hover:bg-transparent hover:text-gray-700 duration-300'>Enroll Course</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleCourse;
