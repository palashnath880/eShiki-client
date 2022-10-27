import React from 'react';
import { AcademicCapIcon, UserGroupIcon, VideoCameraIcon } from '@heroicons/react/24/solid';

const Achievement = () => {
    return (
        <div className='my-10 lg:w-9/12 lg:mx-auto'>
            <div className='grid grid-cols-1 gap-5'>
                <div className='py-5 rounded-md border border-slate-200 mb-3 cursor-pointer hover:bg-gray-700 hover:text-slate-50 duration-300 transition-all'>
                    <div className='w-20 h-20 mx-auto'>
                        <AcademicCapIcon />
                    </div>
                    <p className='text-center mt-3 text-lg font-semibold'>13+ Teacher</p>
                </div>
                <div className='py-5 rounded-md border border-slate-200 mb-3 cursor-pointer hover:bg-gray-700 hover:text-slate-50 duration-300 transition-all'>
                    <div className='w-20 h-20 mx-auto'>
                        <UserGroupIcon />
                    </div>
                    <p className='text-center mt-3 text-lg font-semibold'>200+ Student</p>
                </div>
                <div className='py-5 rounded-md border border-slate-200 mb-3 cursor-pointer hover:bg-gray-700 hover:text-slate-50 duration-300 transition-all'>
                    <div className='w-20 h-20 mx-auto'>
                        <VideoCameraIcon />
                    </div>
                    <p className='text-center mt-3 text-lg font-semibold'>300+ Video Tutorial</p>
                </div>
            </div>
        </div>
    );
}

export default Achievement;
