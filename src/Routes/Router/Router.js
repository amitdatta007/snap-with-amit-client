import {createBrowserRouter} from 'react-router-dom';
import Main from '../../Layouts/Main';
import Login from '../../Pages/Login/Login/Login';
import Register from '../../Pages/Register/Register/Register';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <h2>Home page</h2>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])

export default router;