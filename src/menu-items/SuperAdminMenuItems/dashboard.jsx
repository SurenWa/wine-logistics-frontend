// third-party
//import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics, IconFileReport, IconCellSignal5, IconList, IconReport, IconFolders, IconBuildingEstate } from '@tabler/icons';


const icons = {
    IconDashboard,
    IconDeviceAnalytics,
    IconFileReport,
    IconCellSignal5,
    IconList,
    IconReport,
    IconFolders,
    IconBuildingEstate
};

// ==============================|| MENU ITEMS - PRODUCTS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: "Dashboard",
    icon: icons.IconDashboard,
    type: 'group',    
    children: [
        {
            id: 'analytics',
            title: "Analytics",
            type: 'item',
            url: '/superadmin/analytics',
            icon: icons.IconReport,
            breadcrumbs: true
        },
        {
            id: 'inventory-balance',
            title: "Bedrifter",
            type: 'item',
            url: '/superadmin/businesses',
            icon: icons.IconBuildingEstate,
            breadcrumbs: true
        }
    ]
};

export default dashboard;
