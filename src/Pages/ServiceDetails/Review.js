import React from 'react';
import {FaStar} from 'react-icons/fa';

const Review = ({reviewD}) => {
    const {userPhoto, userName, rating, review} = reviewD;
    return (
        <div className='flex flex-col bg-base-300 p-4 gap-2 rounded-md w-full'>
            <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                    <img  className='w-[24px] h-[24px] rounded-full' src={userPhoto} alt="" />
                    {userName}
                </div>
                <div className='flex items-center gap-1'>{rating} <FaStar /></div>
            </div>
            <div className='px-4'>{review}</div>
        </div>
    );
};

export default Review;