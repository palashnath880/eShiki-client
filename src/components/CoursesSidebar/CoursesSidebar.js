import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CourseContext } from '../../contexts/CoursesContext';
import PopularCourse from '../PopularCourse/PopularCourse';

const CoursesSidebar = () => {
    const [category, setCategory] = useState(null);

    const { courses } = useContext(CourseContext);
    const params = useParams();

    const courseSorting = courses !== null && courses.sort((a, b) => parseInt(a.totalEnroll) - parseInt(b.totalEnroll));
    const reverseCourse = courseSorting && courseSorting.reverse();
    const slicePopularCourse = reverseCourse ? reverseCourse.slice(0, 3) : [];

    useEffect(() => {
        fetch('https://eshiki-server-side.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                setCategory(data);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div className='px-2 pb-5 bg-slate-50 text-gray-600'>
            <div>
                <h2 className='text-xl text-center py-4 border-b border-gray-500'>Categories</h2>
                <div>
                    <ul className="menu menu-compact lg:menu-normal p-2 rounded-box">
                        {
                            category !== null && category.length > 0 ? category.map(cate => <li key={cate.id}><Link className={`${params?.categoryId && parseInt(params.categoryId) === parseInt(cate.id) && 'bg-slate-200'}`} to={`/category/${cate.id}`}>{cate.name}</Link></li>) : ''
                        }
                    </ul>
                </div>
            </div>
            <div>
                <h2 className='text-xl text-center py-4 border-b border-gray-500'>Popular Courses</h2>
                <div className='mt-5 px-2 grid grid-cols-1 gap-4'>
                    {
                        slicePopularCourse && slicePopularCourse.map((course, index) => <PopularCourse key={index} course={course} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default CoursesSidebar;
