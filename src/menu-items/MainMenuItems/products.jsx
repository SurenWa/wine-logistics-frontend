// third-party
//import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics, IconBuildingStore, IconCategory, IconTruck, IconMan, IconCategory2, IconPaperBag } from '@tabler/icons';

const icons = {
    IconDashboard,
    IconDeviceAnalytics,
    IconBuildingStore,
    IconCategory,
    IconTruck,
    IconMan,
    IconCategory2,
    IconPaperBag
};

// ==============================|| MENU ITEMS - PRODUCTS ||============================== //

const products = {
    id: 'products',
    title: "Produkter",
    icon: icons.IconDashboard,
    type: 'group',
    children: [
        {
            id: 'productsc',
            title: "Produkter",
            type: 'item',
            url: '/admin/product/list',
            icon: icons.IconBuildingStore,
            breadcrumbs: true
        },
        {
            id: 'categories',
            title: "Kategorier",
            type: 'item',
            url: '/admin/category/list',
            icon: icons.IconCategory,
            breadcrumbs: true
        },        
        {
            id: 'suppliers',
            title: "Leverandører",
            type: 'item',
            url: '/admin/suppliers/list',
            icon: icons.IconTruck,
            breadcrumbs: true
        },
        {
            id: 'producer',
            title: "Produsent",
            type: 'item',
            url: '/admin/producers/list',
            icon: icons.IconMan,
            breadcrumbs: true
        },
    ]
};

export default products;
