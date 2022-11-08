import {createBrowserRouter} from 'react-router-dom';
import Main from '../../Layouts/Main';
import Login from '../../Pages/Login/Login/Login';

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
            }
        ]
    }
])

export default router;