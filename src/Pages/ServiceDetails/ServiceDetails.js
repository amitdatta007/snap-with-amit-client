import React from 'react';
import {useLoaderData} from 'react-router-dom';
import ServiceInfo from './ServiceInfo';
import ServiceReview from './ServiceReview';

const ServiceDetails = () => {
    const service = useLoaderData();

    return (
        <div className='flex flex-col md:flex-row my-12'>
            <ServiceInfo service={service} />
            <ServiceReview service={service} />
        </div>
    );
};

export default ServiceDetails;