import React, { useEffect, useState } from 'react';
import SingleService from '../../Shared/SingleService/SingleService';
import { Link } from 'react-router-dom';

const HomeServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services/3')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);
    console.log(services)
    return (
        <div className='flex flex-col items-center gap-8'>
            <h2 className='text-center text-3xl font-bold'>Services</h2>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center'>
                {
                    services.map(service => <SingleService key={service._id} service={service} />)
                }
            </div>
            <Link to='/services' className="btn">Show All</Link>
        </div>
    );
};

export default HomeServices;