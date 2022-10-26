import React, { useState, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../contexts/AuthContext';
import { CartContext } from '../../contexts/CartsContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Header = () => {

    const { user, logOut } = useContext(UserContext);
    const { cart } = useContext(CartContext);

    const [sticky, setSticky] = useState(false);
    const [isDark, setIsDark] = useState(false);

    const logoutHandler = () => {
        logOut()
            .then()
            .catch(error => console.error(error));
    }

    const totalAmount = cart !== null ? cart.reduce((prev, next) => prev + parseInt(next.price), 0) : 0;

    const themeHandler = () => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            localStorage.removeItem('theme');
            setIsDark(false);
        } else {
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    }

    useEffect(() => {

        // theme set
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            setIsDark(true);
        }

        const stickyNavbar = () => {
            const currentScrollPos = window.pageYOffset;
            currentScrollPos > 0 ? setSticky(true) : setSticky(false);
        }

        window.addEventListener('scroll', stickyNavbar);

        return () => {
            window.removeEventListener('scroll', stickyNavbar);
        };

    }, []);

    return (
        <div className={`z-50 ${sticky ? 'fixed top-0 left-0' : ''}  bg-slate-50 w-full duration-300 transition-all`}>
            <div className='navbar container mx-auto'>
                <div className="flex-1">
                    <Link className={`normal-case text-3xl text-gray-700`} style={{ fontFamily: "'Lobster Two', cursive" }} to='/'>
                        e<span className='text-violet-500'>Shiki.com</span>
                    </Link>
                </div>
                <div className={`flex-none text-gray-700`}>
                    <ul className={`menu menu-horizontal p-0`}>
                        <li><NavLink className={`bg-transparent text-gray-700`} to='/'>Home</NavLink></li>
                        <li><NavLink className={`bg-transparent text-gray-700`} to='/courses'>Our Courses</NavLink></li>
                        <li><NavLink className={`bg-transparent text-gray-700`} to='/blog'>Blog</NavLink></li>
                    </ul>
                    <ul className="flex gap-2">
                        {user === null && <li><NavLink className='duration-300 border hover:bg-violet-500 hover:text-slate-50 hover:border-violet-500 py-2 px-4 rounded-full' to='/login'>Login</NavLink></li>}
                        {user === null && <li><NavLink className='duration-300 border hover:bg-violet-500 hover:text-slate-50 hover:border-violet-500 py-2 px-4 rounded-full' to='/signup'>Signup</NavLink></li>}
                        <li className='h-full flex items-center'>
                            <button className='px-3' onClick={themeHandler}>{isDark ? <MoonIcon className='w-6 h-6' /> : <SunIcon className='w-6 h-6' />}</button>
                        </li>
                    </ul>
                    <div className="dropdown dropdown-end mr-2">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className={`badge badge-sm indicator-item bg-slate-50 text-gray-700`}>{cart ? cart.length : 0}</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg text-gray-700">{cart ? cart.length : 0} Courses</span>
                                <span className="text-info">Subtotal: &#2547; {totalAmount}</span>
                                <div className="card-actions">
                                    <Link to='/cart' className="btn btn-primary btn-block">View cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        user && user.uid ? <>
                            <div className="dropdown dropdown-end text-gray-700">
                                <label tabIndex={0} className="btn btn-ghost btn-circle">
                                    <div className="z-50 w-10 h-10 overflow-visible rounded-full tooltip tooltip-left" data-tip={user?.displayName}>
                                        <img className='w-full h-full rounded-full' src={user.photoURL ? user.photoURL : 'https://placeimg.com/80/80/people'} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <Link to='/profile' className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </Link>
                                    </li>
                                    <li><button onClick={logoutHandler}>Logout</button></li>
                                </ul>
                            </div>
                        </> : ''
                    }

                </div>
            </div>
        </div >
    );
}

export default Header;
