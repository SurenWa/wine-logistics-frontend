import { lazy } from 'react';

// project imports
//import AuthGuard from 'utils/route-guard/AuthGuard';
import MinimalLayout from '../layout/MinimalLayout';
import Loadable from '../ui-component/Loadable';

// sample page routing
//const SamplePage = Loadable(lazy(() => import('../views/sample-page')));
const Login = Loadable(lazy(() => import('src/views/authentication/Login')));
//const Landing = Loadable(lazy(() => import('src/views/authentication/Landing')));



// ==============================|| MAIN ROUTING ||============================== //

const UserRoutes = {
    path: '/',
    element: (
        <MinimalLayout />
    ),
    children: [
        // {
        //     path: '/',
        //     element: <Landing />
        // },
        {
            path: '/login',
            element: <Login />
        }
    ]
};

export default UserRoutes;
