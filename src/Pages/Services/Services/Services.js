import React, { useEffect, useState } from 'react';
import useTitle from '../../../Hooks/useTitle';
import SingleService from '../../Shared/SingleService/SingleService';

const Services = () => {
    const [services, setServices] = useState([]);
    useTitle('Services')
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);

    return (
        <div className='my-12 flex flex-col items-center gap-8'>
            <h2 className='text-center text-3xl font-bold'>Services</h2>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center'>
                {
                    services.map(service => <SingleService key={service._id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;