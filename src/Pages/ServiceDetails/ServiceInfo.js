import React from 'react';
import {FaStar} from 'react-icons/fa';

const ServiceInfo = ({service}) => {
    const { name, rating, imageUrl, description, price } = service;

    return (
        <div className='w-full md:w-7/12 p-4'>
            <div className='shadow-xl bg-base-200 p-6 rounded-lg flex flex-col gap-3'>
                <h2 className='text-2xl font-bold'>{name}</h2>
                <img className='rounded-md w-full h-full md:h-[240px] lg:h-[360px]' src={imageUrl} alt="" />
                <p>{description}</p>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex items-center text-[#FBBD23] font-semibold' >Rating: {rating} <FaStar /> </div>
                    <div className='text-2xl text-[#FBBD23] font-bold w-[fit-content]'>${price}</div>
                </div>
                <button className='btn'>Buy Now</button>
            </div>
        </div>
    );
};

export default ServiceInfo;