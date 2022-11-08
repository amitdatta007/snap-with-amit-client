import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import lottie from 'lottie-web';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../Contexts/UserContext';

const Login = () => {
    const [error, setError] = useState(null);
    const { signIn } = useContext(AuthContext);

    const container = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            autoplay: true,
            loop: true,
            animationData: require('../../../LottieFiles/login.json'),
        })
    }, []);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setError('Password Should be 6 Character or More.');
            return;
        };
        signIn(email, password)
            .then(() => {
                form.reset();
            })
            .catch(err => {
                console.log(err.code)
                if (err.code === 'auth/user-not-found') {
                    setError('User Not Found!');

                };
                if (err.code === 'auth/wrong-password') {
                    setError('Wrong Password!');
                };
            });
    };

    return (
        <div className="hero">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse lg:gap-12 ">

                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h2 className='text-center text-3xl font-bold mb-6'>Please Login</h2>
                        <div className="form-control mb-3">
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            <p className='text-[14px]'>Don't Have an Account? <Link className='text-primary hover:underline' to='/register'>Register Now</Link></p>
                        </div>
                        <div className='flex items-center my-4'>
                            <div className='h-[1px] w-20 md:w-32 bg-[#ccc]'></div>
                            <p className='text-center'>Login With</p>
                            <div className='h-[1px] w-20 md:w-32 bg-[#ccc]'></div>
                        </div>
                        <div className='flex justify-center gap-4'>
                            <button>
                                <FcGoogle className='text-[36px]' />
                            </button>
                            <button>
                                <FaFacebook className='text-[#4292FF] text-[32px]' />
                            </button>
                        </div>
                    </form>

                </div>

                <div className="text-center lg:text-left">
                    <div className='w-full max-w-2xl' ref={container}></div>
                </div>

            </div>
        </div>
    );
};

export default Login;