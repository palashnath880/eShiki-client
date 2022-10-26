import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CourseContext } from '../../contexts/CoursesContext';

const Footer = () => {
    const { courseCategory } = useContext(CourseContext);
    return (
        <footer className='bg-gray-700 pt-10'>
            <div className='mx-auto container'>
                <div className='flex flex-row gap-4 py-5 text-slate-50'>
                    <div className='w-4/12'>
                        <div className='flex flex-col justify-center h-full'>
                            <h1 className='text-7xl text-violet-300' style={{ fontFamily: "'Lobster Two', cursive" }}>
                                <span className='text-slate-50'>e</span>Shiki.com
                            </h1>
                            <p className='mt-2 text-slate-300 font-light'>A web science learning platform</p>
                        </div>
                    </div>
                    <div className='w-4/12 px-2'>
                        <h3 className='font-semibold text-lg border-b border-slate-400 pb-3'>Categories</h3>
                        <ul className="mt-3 ml-3 font-normal">
                            {
                                courseCategory !== null && courseCategory.map((category, index) => <li key={index}><Link to={`/category/${category?.id}`} className='pt-1 pb-2 mb-1 block duration-300 border-b border-transparent hover:border-slate-500'>{category?.name}</Link></li>)
                            }
                        </ul>
                    </div>
                    <div className='w-4/12 px-2'>
                        <h3 className='font-semibold text-lg border-b border-slate-400 pb-3'>Menu</h3>
                        <ul className="mt-3 ml-3 font-normal">
                            <li><Link className='pt-1 pb-2 mb-1 block duration-300 border-b border-transparent hover:border-slate-500' to={'/'}>Home</Link></li>
                            <li><Link className='pt-1 pb-2 mb-1 block duration-300 border-b border-transparent hover:border-slate-500' to={'/courses'}>Courses</Link></li>
                            <li><Link className='pt-1 pb-2 mb-1 block duration-300 border-b border-transparent hover:border-slate-500' to={'/blog'}>Blog</Link></li>
                            <li><Link className='pt-1 pb-2 mb-1 block duration-300 border-b border-transparent hover:border-slate-500' to={'/cart'}>Cart</Link ></li>
                        </ul>
                    </div>
                </div>
                <div className='text-center text-slate-50 py-4 border-t border-slate-500'>
                    <p>Copyright 2020 - 2022 | Develop By Palash</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
