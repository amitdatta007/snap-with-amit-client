import React from 'react';
import { Link } from 'react-router-dom';
import {FaStar} from 'react-icons/fa';

const SingleService = ({ service }) => {
    const { name, rating, imageUrl, description, price, _id } = service;
    return (
        <div className="card card-compact w-full max-w-xl bg-base-100 shadow-xl mx-auto">
            <figure><img className='w-full' src={imageUrl} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description.slice(0, 90)} ...</p>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex items-center text-[#FBBD23] font-semibold' >Rating: {rating} <FaStar /> </div>
                    <div className='text-2xl text-[#FBBD23] font-bold w-[fit-content]'>${price}</div>
                </div>
                <Link to={`/service/${_id}`} className="btn btn-primary">View Details</Link>
            </div>
        </div>
    );
};

export default SingleService;