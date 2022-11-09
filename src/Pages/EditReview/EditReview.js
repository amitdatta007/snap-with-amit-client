import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EditReview = () => {

    const review = useLoaderData();
    console.log(review)

    const handleReview = e => {
        e.preventDefault();
        const form = e.target;
        const rating = form.rating.value;
        const reviews = form.review.value;
        const newReview = { ...review };
        newReview['rating'] = rating;
        newReview['review'] = reviews;

        fetch(`http://localhost:5000/review/${review._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {

            })
    };
    return (
        <div className='my-12'>
            <h2 className='text-2xl font-bold text-center mb-4'>Update Review</h2>
            <form onSubmit={handleReview} className='flex flex-col gap-3 max-w-3xl mx-auto'>
                <input name='rating' type="range" min="1" max="5" defaultValue={review.rating} className="range" step="1" />
                <div className="w-full flex justify-between text-xs px-2">
                    <span>1s</span>
                    <span>2s</span>
                    <span>3s</span>
                    <span>4s</span>
                    <span>5s</span>
                </div>
                <textarea name='review' defaultValue={review.review} className="textarea w-full h-32 textarea-bordered resize-none" placeholder="Review the Service" required></textarea>
                <button type="submit" className='btn'>Update</button>
            </form>
        </div>
    );
};

export default EditReview;