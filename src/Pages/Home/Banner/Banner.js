import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import {Link} from 'react-router-dom'

const Banner = () => {

    const container1 = useRef(null);
    const container2 = useRef(null);
    const container3 = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
            container: container1.current,
            renderer: 'svg',
            autoplay: true,
            loop: true,
            animationData: require('../../../LottieFiles/photography1.json'),
        });
        lottie.loadAnimation({
            container: container2.current,
            renderer: 'svg',
            autoplay: true,
            loop: true,
            animationData: require('../../../LottieFiles/photography2.json'),
        });
        lottie.loadAnimation({
            container: container3.current,
            renderer: 'svg',
            autoplay: true,
            loop: true,
            animationData: require('../../../LottieFiles/photography3.json'),
        });
    }, []);

    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="hero bg-base-200 rounded-lg">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className='w-full' ref={container1}></div>
                        <div>
                            <h1 className="text-5xl font-bold">Professional Photography</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <Link to={'/services'} className="btn btn-primary">Services</Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 gap-3 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="hero bg-base-200 rounded-lg">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className='w-full' ref={container2}></div>
                        <div>
                            <h1 className="text-5xl font-bold">Product Photography</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <Link to={'/services'} className="btn btn-primary">Services</Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 gap-3 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className="hero bg-base-200 rounded-lg">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className='w-full' ref={container3}></div>
                        <div>
                            <h1 className="text-5xl font-bold">Drone Videos</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <Link to={'/services'} className="btn btn-primary">Services</Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 gap-3 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;