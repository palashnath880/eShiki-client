import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Achievement from '../Achievement/Achievement';
import PopularCourse from '../PopularCourse/PopularCourse';

const CoursesSidebar = () => {

    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState(null);

    useEffect(() => {
        fetch('https://eshiki-server-side.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                setLoading(false);
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
                            category !== null && category.length > 0 ? category.map(cate => <li key={cate.id}><Link to={`/category/${cate.id}`}>{cate.name}</Link></li>) : ''
                        }
                    </ul>
                </div>
            </div>
            <div>
                <h2 className='text-xl text-center py-4 border-b border-gray-500'>Popular Courses</h2>
                <div className='mt-5 px-2 grid grid-cols-1 gap-4'>
                    <PopularCourse />
                    <PopularCourse />
                    <PopularCourse />
                    <PopularCourse />
                </div>
            </div>
        </div>
    );
}

export default CoursesSidebar;
