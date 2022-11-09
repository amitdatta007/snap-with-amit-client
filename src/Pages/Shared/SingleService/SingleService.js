import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({ service }) => {
    const { name, rating, imageUrl, description, price } = service;
    return (
        <div className="card card-compact w-full max-w-xl bg-base-100 shadow-xl">
            <figure><img className='w-full' src={imageUrl} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description.slice(0, 90)} ...</p>
                <div>

                </div>
                <Link to='/' className="btn btn-primary">View Details</Link>
            </div>
        </div>
    );
};

export default SingleService;