import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import InstructorItem from '../InstructorItem/InstructorItem';

const Instructor = () => {

    const [instructors, setInstructors] = useState([]);

    const fetcher = async () => {
        const res = await fetch(`https://eshiki-server-side.vercel.app/instructor`);
        const data = await res.json();
        setInstructors(data);
    }

    useEffect(() => {
        fetcher();
    }, []);

    return (
        <div className='pb-10'>
            <div className='text-center border-b pb-5'>
                <h1 className='font-semibold text-3xl'>Our Instructor</h1>
            </div>
            <div className='mb-5 mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {
                    instructors.length > 0 && instructors.map((instructor, index) => <InstructorItem key={index} instructor={instructor} />)
                }

            </div>
        </div >
    );
}

export default Instructor;
