import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/UserContext';
import Review from '../ServiceDetails/Review';
import {Link} from 'react-router-dom';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myreview/${user.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, []);

    const handleDelete = reviewId => {
        const sure = window.confirm('You Want to delete Review?')
        if(sure){
            fetch(`http://localhost:5000/review/${reviewId}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        }
    }

    return (
        <div className='flex flex-col gap-4 my-12'>
            {
                reviews.map(review => <div key={review._id} className='flex gap-6 items-center'>
                    <Review reviewD={review}/>
                    <Link to={`/review/edit/${review._id}`} className='btn'>Edit</Link>
                    <button className='btn' onClick={() => handleDelete(review._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default MyReviews;