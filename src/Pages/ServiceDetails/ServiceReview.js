import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/UserContext.js'

const ServiceReview = ({service}) => {
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);
    const {_id} = service;


    useEffect(() => {

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
        const reviewData = {rating, review, serviceId, userName, userEmail, userPhoto};

    };


    return (
        <div className='w-full md:w-5/12 p-4'>
            <div className='shadow-xl bg-base-200 p-4 rounded-lg flex flex-col gap-3'>
                <h2 className='text-3xl font-bold text-center'>Reviews</h2>
                <div>
                    {

                    }
                </div>
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
            </div>
        </div>
    );
};

export default ServiceReview;