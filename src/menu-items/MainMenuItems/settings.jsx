// third-party
//import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics, IconUser, IconUserPlus } from '@tabler/icons';

const icons = {
    IconDashboard,
    IconDeviceAnalytics,
    IconUser,
    IconUserPlus
};

// ==============================|| MENU ITEMS - PRODUCTS ||============================== //

const reports = {
    id: 'settings',
    title: "Innstillinger",
    icon: icons.IconDashboard,
    type: 'group',
    children: [
        {
            id: 'users',
            title: "Brukere",
            type: 'item',
            url: '/admin/user/list',
            icon: icons.IconUser,
            breadcrumbs: true
        }  
    ]
};

export default reports;
