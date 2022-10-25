import React from 'react';
import { AcademicCapIcon, UserGroupIcon, VideoCameraIcon } from '@heroicons/react/24/solid';

const Achievement = () => {
    return (
        <div className='py-3'>
            <div className='flex flex-col'>
                <div className='py-2 rounded-md border border-slate-200 mb-3 cursor-pointer hover:bg-gray-700 hover:text-slate-50 duration-300 transition-all'>
                    <div className='w-20 h-20 mx-auto'>
                        <AcademicCapIcon />
                    </div>
                    <p className='text-center mt-3 text-lg font-semibold'>200+ Teacher</p>
                </div>
                <div className='py-2 rounded-md border border-slate-200 mb-3 cursor-pointer hover:bg-gray-700 hover:text-slate-50 duration-300 transition-all'>
                    <div className='w-20 h-20 mx-auto'>
                        <UserGroupIcon />
                    </div>
                    <p className='text-center mt-3 text-lg font-semibold'>200+ Student</p>
                </div>
                <div className='py-2 rounded-md border border-slate-200 mb-3 cursor-pointer hover:bg-gray-700 hover:text-slate-50 duration-300 transition-all'>
                    <div className='w-20 h-20 mx-auto'>
                        <VideoCameraIcon />
                    </div>
                    <p className='text-center mt-3 text-lg font-semibold'>200+ Video Tutorial</p>
                </div>
            </div>
        </div>
    );
}

export default Achievement;
