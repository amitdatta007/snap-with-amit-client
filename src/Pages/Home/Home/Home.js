import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import Feedback from '../Feedback/Feedback';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
    useTitle('Home')
    return (
        <div className='my-10 flex flex-col gap-10'>
            <Banner />
            <HomeServices />
            <Feedback />
            <Faq />
        </div>
    );
};

export default Home;