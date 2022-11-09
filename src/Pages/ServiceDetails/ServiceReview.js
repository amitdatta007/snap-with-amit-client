import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/UserContext.js'
import Review from './Review.js';
import { Link } from 'react-router-dom';

const ServiceReview = ({ service }) => {
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);
    const { _id } = service;


    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    const handleReview = e => {
        e.preventDefault();
        const form = e.target;
        const rating = form.rating.value;
        const review = form.review.value;
        const serviceId = _id;
        const userName = user.displayName;
        const userEmail = user.email;
        const userPhoto = user.photoURL;
        const reviewData = { rating, review, serviceId, userName, userEmail, userPhoto };

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                form.reset();
            });
    };


    return (
        <div className='w-full md:w-5/12 p-4'>
            <div className='shadow-xl bg-base-200 p-4 rounded-lg flex flex-col gap-3'>
                <h2 className='text-3xl font-bold text-center'>Reviews</h2>
                <div className='flex flex-col gap-4'>
                    {
                        reviews.map(review => <Review key={review._id} reviewD={review} />)
                    }
                </div>
                {
                    user?.uid ?
                        <form onSubmit={handleReview} className='flex flex-col gap-3'>
                            <input name='rating' type="range" min="1" max="5" defaultValue='1' className="range" step="1" />
                            <div className="w-full flex justify-between text-xs px-2">
                                <span>1s</span>
                                <span>2s</span>
                                <span>3s</span>
                                <span>4s</span>
                                <span>5s</span>
                            </div>
                            <textarea name='review' className="textarea w-full h-32 textarea-bordered resize-none" placeholder="Review the Service" required></textarea>
                            <button type="submit" className='btn'>Submit</button>
                        </form>
                        :
                        <Link className='btn' to='/login'>Login to Review</Link>
                }
            </div>
        </div>
    );
};

export default ServiceReview;