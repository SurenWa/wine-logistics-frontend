import { lazy } from 'react';

// project imports
//import AuthGuard from 'utils/route-guard/AuthGuard';
import UserLayout from '../layout/UserLayout';
import Loadable from '../ui-component/Loadable';

// sample page routing
//const SamplePage = Loadable(lazy(() => import('../views/sample-page')));
const Sales = Loadable(lazy(() => import('src/views/users/sales')));
const InventoryBalance = Loadable(lazy(() => import('src/views/users/inventoryBalance/InventoryBalance')));
const Log = Loadable(lazy(() => import('src/views/users/log/Log')));

// ==============================|| MAIN ROUTING ||============================== //

const UserRoutes = {
    path: '/',
    element: (
        <UserLayout />
    ),
    children: [
        // {
        //     path: '/',
        //     element: <SamplePage />
        // },
        {
            path: '/user/sales',
            element: <Sales />
        },
        {
            path: '/user/inventory-balance',
            element: <InventoryBalance />
        },
        {
            path: '/user/log',
            element: <Log />
        }
    ]
};

export default UserRoutes;
