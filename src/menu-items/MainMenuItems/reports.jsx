// third-party
//import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics, IconReport } from '@tabler/icons';

const icons = {
    IconDashboard,
    IconDeviceAnalytics,
    IconReport
};

// ==============================|| MENU ITEMS - PRODUCTS ||============================== //

const reports = {
    id: 'reports',
    title: "Rapporter",
    icon: icons.IconDashboard,
    type: 'group',
    children: [
        {
            id: 'sales-report',
            title: "Salgsrapport",
            type: 'item',
            url: '/admin/salesreport/list',
            icon: icons.IconReport,
            breadcrumbs: true
        },
        {
            id: 'log',
            title: "Logg",
            type: 'item',
            url: '/admin/analytics',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

export default reports;
