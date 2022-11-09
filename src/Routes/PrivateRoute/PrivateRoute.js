import React, { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <p className='text-center text-2xl text-[var(--primary)] mt-20'>Loading...</p>
    }
    if(user?.uid){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace/>
};

export default PrivateRoute;