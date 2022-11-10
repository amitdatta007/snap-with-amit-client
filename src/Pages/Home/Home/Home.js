import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Banner from '../Banner/Banner';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
    useTitle('Home')
    return (
        <div className='my-10 flex flex-col gap-10'>
            <Banner />
            <HomeServices />
        </div>
    );
};

export default Home;