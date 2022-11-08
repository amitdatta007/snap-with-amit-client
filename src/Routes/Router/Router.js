import {createBrowserRouter} from 'react-router-dom';
import Main from '../../Layouts/Main';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <h2>Home page</h2>
            }
        ]
    }
])

export default router;