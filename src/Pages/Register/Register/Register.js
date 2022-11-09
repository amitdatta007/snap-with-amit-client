import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import lottie from 'lottie-web';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../Contexts/UserContext';

const Register = () => {
    const [error, setError] = useState(null);
    const { createUser, updateUser, profileUpdated, setProfileUpdated, handleGoogleLogin, handleFacebookLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

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

    const handleSignup = e => {
        e.preventDefault();
        setError(null);
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const displayName = form.displayName.value;
        const photoUrl = form.photoUrl.value;

        if (password.length < 6) {
            setError('Password Should be 6 Character or More.');
            return;
        };
        if (password !== confirmPassword) {
            setError('Your Password Did Not Match.');
            return;
        };
        createUser(email, password)
            .then(() => {
                updateUser(displayName, photoUrl)
                    .then(() => {
                        setProfileUpdated(!profileUpdated);
                    })
                    .catch(() => { });
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(err => {
                if (err.code === 'auth/email-already-in-use') {
                    setError('Email Already Used.')
                }
            });
    };

    const loginByGoogle = () => {
        handleGoogleLogin()
            .then(() => {
                navigate(from, { replace: true });
            })
    };

    const loginByFacebook = () => {
        handleFacebookLogin()
        .then(() => {
            navigate(from, { replace: true });
        })
    };

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse lg:gap-12 ">

                <div className="text-center lg:text-left">
                    <div className='w-full max-w-2xl' ref={container}></div>
                </div>

                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSignup}>
                            <h2 className='text-center text-3xl font-bold mb-6'>Welcome. Register Now</h2>
                            <div className="form-control mb-3">
                                <input type="text" name='displayName' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control mb-3">
                                <input type="url" name='photoUrl' placeholder="photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control mb-3">
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control mb-3">
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mb-3">
                                <input type="password" name='confirmPassword' placeholder="confirm password" className="input input-bordered" required />
                            </div>
                            {
                                error && <div className='text-center py-1 rounded-3xl bg-error'>
                                    <p>{error}</p>
                                </div>
                            }
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Signup</button>
                            </div>
                            <div>
                                <p className='text-[14px]'>Already Have an Account? <Link className='text-primary hover:underline' to='/login'>Login Now</Link></p>
                            </div>
                        </form>
                        <div className='flex items-center my-4'>
                            <div className='h-[1px] w-20 md:w-32 bg-[#ccc]'></div>
                            <p className='text-center'>Login With</p>
                            <div className='h-[1px] w-20 md:w-32 bg-[#ccc]'></div>
                        </div>
                        <div className='flex justify-center gap-4'>
                            <button onClick={loginByGoogle}>
                                <FcGoogle className='text-[36px]' />
                            </button>
                            <button onClick={loginByFacebook}>
                                <FaFacebook className='text-[#4292FF] text-[32px]' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;