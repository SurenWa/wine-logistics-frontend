// third-party
//import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics, IconFileReport, IconCellSignal5, IconList } from '@tabler/icons';


const icons = {
    IconDashboard,
    IconDeviceAnalytics,
    IconFileReport,
    IconCellSignal5,
    IconList
};

// ==============================|| MENU ITEMS - PRODUCTS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: "Dashbord",
    icon: icons.IconDashboard,
    type: 'group',
    children: [
        {
            id: 'stock-overview',
            title: "Analytics",
            type: 'item',
            url: '/admin/analytics',
            icon: icons.IconDeviceAnalytics,
            breadcrumbs: true
        }
    ]
};

export default dashboard;
