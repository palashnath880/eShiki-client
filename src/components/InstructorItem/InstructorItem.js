import React from 'react';

const InstructorItem = ({ instructor }) => {
    const { name, image, profession, course } = instructor;
    return (
        <div className="card p-4 border shadow-xl">
            <div className="avatar mx-auto">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={image} alt='' />
                </div>
            </div>
            <div className="card-body gap-0 p-0 mt-5 items-center text-center">
                <h2 className="card-title mt-3">{name}</h2>
                <p className='m-0 p-0'>{profession}</p>
                <small>{course} courses</small>
            </div>
        </div>
    );
}

export default InstructorItem;
