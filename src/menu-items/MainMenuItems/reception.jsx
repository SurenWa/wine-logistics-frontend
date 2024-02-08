// third-party
//import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics, IconReport, IconList, IconBell, IconBellPlus } from '@tabler/icons';

const icons = {
    IconDashboard,
    IconDeviceAnalytics,
    IconReport,
    IconList,
    IconBell,
    IconBellPlus
};

// ==============================|| MENU ITEMS - PRODUCTS ||============================== //

const reports = {
    id: 'reception',
    title: "Mottak",
    icon: icons.IconBell,
    type: 'group',
    children: [
        {
            id: 'reception-list',
            title: "Mottak",
            type: 'item',
            url: '/admin/reception/list',
            icon: icons.IconBell, 
            breadcrumbs: true           
        },
        {
            id: 'add-reception',
            title: "Legg til mottak",
            type: 'item',
            url: '/admin/reception/add',
            icon: icons.IconBellPlus,
            breadcrumbs: false
        }
    ]
};

export default reports;
