import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/UserContext.js'
import Review from './Review.js';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ServiceReview = ({ service }) => {
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);
    const { _id } = service;
    const [rev, setRev] = useState(false)


    useEffect(() => {
        fetch(`https://snap-with-amit-server.vercel.app/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [rev]);

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

        fetch('https://snap-with-amit-server.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                form.reset();
                setRev(!rev);
                toast.success('Review Succesfully Added', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
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
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
};

export default ServiceReview;