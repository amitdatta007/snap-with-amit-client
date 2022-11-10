import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/UserContext';
import Review from '../ServiceDetails/Review';
import {Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../Hooks/useTitle';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [del, setDet] = useState(false);
    useTitle('My Review')

    useEffect(() => {
        fetch(`http://localhost:5000/myreview/${user.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [del]);

    const handleDelete = reviewId => {
        const sure = window.confirm('You Want to delete Review?')
        if(sure){
            fetch(`http://localhost:5000/review/${reviewId}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    setDet(!del);
                    toast.success('Review Succesfully Deleted', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                };
            });
        };
    };

    return (
        <div className='flex flex-col gap-4 my-12'>
            <h2 className='text-2xl font-bold text-center mb-5'>My Reviews</h2>
            {
                reviews.map(review => <div key={review._id} className='flex gap-6 items-center'>
                    <Review reviewD={review}/>
                    <Link to={`/review/edit/${review._id}`} className='btn'>Edit</Link>
                    <button className='btn' onClick={() => handleDelete(review._id)}>Delete</button>
                </div>)
            }
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

export default MyReviews;