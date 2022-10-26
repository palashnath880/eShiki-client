import React, { useContext } from 'react';
import { CourseContext } from '../../contexts/CoursesContext';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const CartItem = ({ id, deleteCart }) => {

    const { courses } = useContext(CourseContext);
    const findCourse = courses.find(item => parseInt(item.id) === parseInt(id));

    return (
        <div className='rounded-md mb-2 border p-2 flex gap-4 items-center'>
            <div className='w-28 overflow-hidden'>
                <img src={findCourse?.thumbnail} alt='' />
            </div>
            <div className='flex-1'>
                <Link to={`/course/${id}`}><h2 className='text-lg'>{findCourse?.name}</h2></Link>
                <p>Price: &#2547; {findCourse?.price}</p>
            </div>
            <button onClick={() => deleteCart(id)} className='w-12 h-12 flex items-center justify-center hover:bg-red-200 duration-300 rounded-full'>
                <XMarkIcon className='w-8 h-8 text-red-500' />
            </button>
        </div>
    );
}

export default CartItem;
