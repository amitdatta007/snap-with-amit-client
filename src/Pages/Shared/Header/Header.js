import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/UserContext';
import NavItem from './NavItem';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { HiSun, HiMoon, HiUser } from 'react-icons/hi';

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [open, setOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    console.log(document.querySelector('html'))

    useEffect(() => {
        if(isDarkMode) {
            document.querySelector('html').setAttribute('data-theme', 'night')
        } else{
            document.querySelector('html').setAttribute('data-theme', 'winter')
        }
    }, [isDarkMode])

    const handleLogout = () => {
        logOut();
        setOpen(false);
    };

    return (
        <div className='py-3 flex justify-between items-center'>
            <div className="logo z-20">
                <Link to='/'>
                    <h2 className='text-primary font-bold text-2xl'>SNAP WITH AMIT</h2>
                </Link>
            </div>

            <div className='flex items-center gap-6'>
                    <div
                        className={`bg-base-100 flex absolute md:static w-full h-[calc(100vh-60px)] md:h-fit md:w-fit md:gap-8 left-0 black font-semibold ${open ? 'top-[60px]' : 'top-[-120vh]'} ${open ? 'z-10' : 'z-10'} flex-col md:flex-row justify-center items-center duration-700 ease-in-out gap-3 md:duration-[0s]`}
                    >
                        <NavItem name='Courses' path='/catagory/06' setOpen={setOpen} />
                        <NavItem name='FAQ' path='/faq' setOpen={setOpen} />
                        <NavItem name='Blogs' path='/blogs' setOpen={setOpen} />
                        <div className='w-[1px] h-5 bg-base-content hidden md:block'></div>

                        {
                            user?.uid ?
                                <div className='flex items-center gap-6'>
                                    {
                                        user.photoURL ? <div>
                                            <img src={user.photoURL} alt="" className='w-[32px] h-[32px] rounded-full'/>
                                        </div> : <div className='default-user-img' data-tip="React-tooltip">
                                            <HiUser />
                                        </div>
                                    }
                                    <button onClick={handleLogout} className='bg-base-content text-base-100 px-4 py-2 rounded-3xl hover:neutral-focus'>Log Out</button>
                                </div>
                                :
                                <div>
                                    <Link to='/login' onClick={() => setOpen(false)} className='bg-base-content text-base-100 px-4 py-2 rounded-3xl hover:bg-primary-focus' >Log In</Link>
                                </div>
                        }

                    </div>
                    <div className='z-20 theme-icon text-2xl' onClick={() => setIsDarkMode(!isDarkMode)}>
                        {
                            isDarkMode ? <HiMoon /> : <HiSun />

                        }
                    </div>
                    <div onClick={() => setOpen(!open)} className="h-7 w-7 md:hidden z-20 menu-icon">
                        {
                            open ? <XMarkIcon /> : <Bars4Icon />
                        }
                    </div>
                </div>

        </div>
    );
};

export default Header;