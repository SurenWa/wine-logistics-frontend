import { lazy } from 'react';

// project imports
//import AuthGuard from 'utils/route-guard/AuthGuard';
import SuperAdminLayout from '../layout/SuperAdminLayout';
import Loadable from '../ui-component/Loadable';

// sample page routing
//const SamplePage = Loadable(lazy(() => import('../views/sample-page')));

const Analytics = Loadable(lazy(() => import('src/views/main/analytics/Analytics')));
const BusinessesList = Loadable(lazy(() => import('src/views/superadmin/businesses/BusinessesList')));
const AddBusiness = Loadable(lazy(() => import('src/views/superadmin/businesses/AddBusiness')));


// ==============================|| MAIN ROUTING ||============================== //

const SuperAdminRoutes = {
    path: '/',
    element: (
        <SuperAdminLayout />
    ),
    children: [
        // {
        //     path: '/',
        //     element: <SamplePage />
        // },
        {
            path: '/superadmin/analytics',
            element: <Analytics />
        },
        {
            path: '/superadmin/businesses',
            element: <BusinessesList />
        },
        {
            path: '/superadmin/businesses/add',
            element: <AddBusiness />
        }
    ]
};

export default SuperAdminRoutes;
