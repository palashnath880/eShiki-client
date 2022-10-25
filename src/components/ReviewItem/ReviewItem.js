import React from 'react';

const ReviewItem = () => {
    return (
        <div className="card p-4 border shadow-xl">
            <div className="avatar mx-auto">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://placeimg.com/192/192/people" />
                </div>
            </div>
            <div className="card-body gap-0 p-0 mt-5 items-center text-center">
                <p>If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</p>
                <h2 className="card-title mt-3">Jon Deo</h2>
                <p className='m-0 p-0'>Web Developer</p>
                <small>Example It LTD</small>
            </div>
        </div>
    );
}

export default ReviewItem;
