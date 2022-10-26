import React from 'react';
import { Link } from 'react-router-dom';
import BGImg from './banner-bg.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${BGImg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">We provide web development tutorial courses.We are the first to teach web development to students through videos.We currently have 7 courses running..</p>
                    <Link to='/courses' className="btn btn-primary">Get Started</Link>
                </div>
            </div>
        </div>
    );
}

export default Banner;
