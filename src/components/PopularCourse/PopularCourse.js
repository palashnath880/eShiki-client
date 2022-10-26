import React from 'react';
import { Link } from 'react-router-dom';
import { ClockIcon, AcademicCapIcon } from '@heroicons/react/24/solid';

const PopularCourse = ({ course }) => {
    const { id, name, duration, thumbnail, totalEnroll } = course;
    return (
        <div className="card border bg-base-100">
            <Link to={`/courses/${id}`}>
                <figure><img src={thumbnail} alt="" /></figure>
                <div className="card-body gap-0 px-3 py-5">
                    <h2 className="card-title">{name}</h2>
                    <p className='flex justify-between mt-2'>
                        <span className='flex items-center'>
                            <ClockIcon className='w-4 h-4 m-0 mr-1' />
                            : {duration}
                        </span>
                        <span className='flex-1 flex justify-end items-center'>
                            <AcademicCapIcon className='w-5 h-5 m-0 mr-1' />: {totalEnroll} Students
                        </span>
                    </p>
                </div>
            </Link>
        </div>
    );
}

export default PopularCourse;
