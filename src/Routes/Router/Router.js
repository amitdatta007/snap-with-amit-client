import {createBrowserRouter} from 'react-router-dom';
import Main from '../../Layouts/Main';
import AddService from '../../Pages/AddService/AddService';
import Blogs from '../../Pages/Blogs/Blogs';
import EditReview from '../../Pages/EditReview/EditReview';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login/Login';
import MyReviews from '../../Pages/MyReviews/MyReviews';
import Register from '../../Pages/Register/Register/Register';
import ServiceDetails from '../../Pages/ServiceDetails/ServiceDetails';
import Services from '../../Pages/Services/Services/Services';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/service/add',
                element: <PrivateRoute><AddService /></PrivateRoute>
            },
            {
                path: 'services',
                element: <Services />
            },
            {
                path: '/reviews',
                element: <PrivateRoute><MyReviews /></PrivateRoute>
            },
            {
                path: '/service/:id',
                element: <ServiceDetails />,
                loader: async({params}) => fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path: '/review/edit/:id',
                element: <EditReview />,
                loader: async({params}) => fetch(`http://localhost:5000/review/${params.id}`)
            }
        ]
    }
])

export default router;