import { lazy } from 'react';

// project imports
//import AuthGuard from 'utils/route-guard/AuthGuard';
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';

// sample page routing
// const SamplePage = Loadable(lazy(() => import('../views/sample-page')));
const UserList = Loadable(lazy(() => import('src/views/main/users/UserList')));
const AddUsers = Loadable(lazy(() => import('src/views/main/users/AddUsers')));
const CategoryList = Loadable(lazy(() => import('src/views/main/categories/CategoryTable')));
const AddCategories = Loadable(lazy(() => import('src/views/main/categories/AddCategories')));
const ProductList = Loadable(lazy(() => import('src/views/main/products/ProductList')));
const AddProducts = Loadable(lazy(() => import('src/views/main/products/AddProducts')));
const ReceptionList = Loadable(lazy(() => import('src/views/main/reception/ReceptionList')));
const AddReception = Loadable(lazy(() => import('src/views/main/reception/AddReception')));
const StockCount = Loadable(lazy(() => import('src/views/main/stockcount/StockCount')));
const AddStockCount = Loadable(lazy(() => import('src/views/main/stockcount/AddStockCount')));
const Analytics = Loadable(lazy(() => import('src/views/main/analytics/Analytics')));
const SalesReport = Loadable(lazy(() => import('src/views/main/salesreport/SalesReportList')));
const StockOverview = Loadable(lazy(() => import('src/views/main/stockoverview/StockOverview')));
const OrderProposal = Loadable(lazy(() => import('src/views/main/order-proposal/OrderProposal')));
const SuppliersList = Loadable(lazy(() => import('src/views/main/suppliers/SuppliersList')));
const ProducersList = Loadable(lazy(() => import('src/views/main/producers/ProducersList')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: (
        <MainLayout />
    ),
    children: [
        // {
        //     path: '/',
        //     element: <SamplePage />
        // },
        {
            path: '/admin/analytics',
            element: <Analytics />
        },
        {
            path: '/admin/user/list',
            element: <UserList />
        },
        {
            path: '/admin/user/add',
            element: <AddUsers />
        },
        {
            path: '/admin/category/list',
            element: <CategoryList />
        },
        {
            path: '/admin/category/add',
            element: <AddCategories />
        },
        {
            path: '/admin/product/list',
            element: <ProductList />
        },
        {
            path: '/admin/product/add',
            element: <AddProducts />
        },
        {
            path: '/admin/reception/list',
            element: <ReceptionList />
        },
        {
            path: '/admin/reception/add',
            element: <AddReception />
        },
        {
            path: '/admin/stockcount/list',
            element: <StockCount />
        },
        {
            path: '/admin/stockcount/add',
            element: <AddStockCount />
        },
        {
            path: '/admin/salesreport/list',
            element: <SalesReport />
        },
        {
            path: '/admin/stockoverview/list',
            element: <StockOverview />
        },
        {
            path: '/admin/orderproposal/list',
            element: <OrderProposal />
        },
        {
            path: '/admin/suppliers/list',
            element: <SuppliersList />
        },
        {
            path: '/admin/producers/list',
            element: <ProducersList />
        }
    ]
};

export default MainRoutes;
