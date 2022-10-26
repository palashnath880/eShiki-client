import React, { useEffect, useState } from 'react';
import { AcademicCapIcon, ClockIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const RelatedCourse = ({ categoryId, courseId }) => {
    const [relatedCourse, setRelatedCourse] = useState(null);

    useEffect(() => {
        fetch(`https://eshiki-server-side.vercel.app/categories/${categoryId}`)
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    const filterCourse = data.filter(course => parseInt(course.id) !== parseInt(courseId));
                    setRelatedCourse(filterCourse);
                }
            })
            .catch(error => console.error(error));
    }, [])

    if (relatedCourse === null || relatedCourse.length <= 0) {
        return (<></>);
    }

    return (
        <div className='mt-10'>
            <h1 className='text-2xl border-b pb-3'>Related Course</h1>
            <div className='mt-5 grid gap-2 grid-cols-3'>
                {
                    relatedCourse && relatedCourse.map((course, index) =>
                        <div key={index} className="card border bg-base-100">
                            <Link to={`/courses/`}>
                                <figure><img src={course?.thumbnail} alt="" /></figure>
                                <div className="card-body gap-0 px-3 py-5">
                                    <h2 className="card-title">{course?.name}</h2>
                                    <p className='flex justify-between mt-2'>
                                        <span className='flex items-center'>
                                            <ClockIcon className='w-4 h-4 m-0 mr-1' />
                                            : {course?.duration}
                                        </span>
                                        <span className='flex-1 flex justify-end items-center'>
                                            <AcademicCapIcon className='w-5 h-5 m-0 mr-1' />: {course?.totalEnroll} Students
                                        </span>
                                    </p>
                                </div>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default RelatedCourse;
