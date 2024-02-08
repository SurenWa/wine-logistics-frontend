import { useRoutes } from 'react-router-dom';
import { lazy } from 'react';
import Loadable from '../ui-component/Loadable';

// routes
// import AuthenticationRotes from './AuthenticationRoutes';
// import LoginRoutes from './LoginRoutes';
const Landing = Loadable(lazy(() => import('src/views/Landing')));
import MainRoutes from './MainRoutes';
import UserRoutes from './UserRoutes';
import SuperAdminRoutes from './SuperAdminRoutes';
import AuthRoutes from './AuthRoutes';
//const Landing = Loadable(lazy(() => import('src/views/Landing')));

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([{ path: '/', element: <Landing /> },MainRoutes, UserRoutes, SuperAdminRoutes, AuthRoutes]);
    //return useRoutes([{ path: '/', element: <PagesLanding /> }, AuthenticationRoutes, LoginRoutes, MainRoutes]);
}