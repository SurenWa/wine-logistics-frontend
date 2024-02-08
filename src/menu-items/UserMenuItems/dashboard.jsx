// third-party
//import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics, IconFileReport, IconCellSignal5, IconList, IconReport, IconFolders } from '@tabler/icons';


const icons = {
    IconDashboard,
    IconDeviceAnalytics,
    IconFileReport,
    IconCellSignal5,
    IconList,
    IconReport,
    IconFolders
};

// ==============================|| MENU ITEMS - PRODUCTS ||============================== //

const dashboard = {
    id: 'menu',
    title: "Menu",
    icon: icons.IconDashboard,
    type: 'group',    
    children: [
        {
            id: 'sales',
            title: "Salg",
            type: 'item',
            url: '/user/sales',
            icon: icons.IconReport,
            breadcrumbs: true
        },
        {
            id: 'inventory-balance',
            title: "Lagersaldo",
            type: 'item',
            url: '/user/inventory-balance',
            icon: icons.IconCellSignal5,
            breadcrumbs: true
        },
        {
            id: 'log',
            title: "Logg",
            type: 'item',
            url: '/user/log',
            icon: icons.IconFolders,
            breadcrumbs: true
        },
    ]
};

export default dashboard;
