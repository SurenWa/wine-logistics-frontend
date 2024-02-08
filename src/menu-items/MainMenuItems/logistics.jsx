// third-party
//import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics, IconFileReport, IconCellSignal5, IconList, IconFileDescription, IconReportSearch, IconFilePlus, IconBrandCodesandbox } from '@tabler/icons';

const icons = {
    IconDashboard,
    IconDeviceAnalytics,
    IconFileReport,
    IconCellSignal5,
    IconList,
    IconFileDescription,
    IconReportSearch,
    IconFilePlus,
    IconBrandCodesandbox
};

// ==============================|| MENU ITEMS - PRODUCTS ||============================== //

const logistics = {
    id: 'logistics',
    title: "Logistikk",
    icon: icons.IconDashboard,
    type: 'group',
    children: [
        {
            id: 'stock-overview',
            title: "Lageroversikt",
            type: 'item',
            url: '/admin/stockoverview/list',
            icon: icons.IconReportSearch,
            breadcrumbs: true
        },
        {
            id: 'order-proposal',
            title: "Bestillingsforslag",
            type: 'item',
            url: '/admin/orderproposal/list',
            icon: icons.IconFileDescription,
            breadcrumbs: true
        },
        {
            id: 'stock-count',
            title: "Varetelling",
            type: 'item',
            url: '/admin/stockcount/list',
            icon: icons.IconCellSignal5,
            breadcrumbs: true
        },
        {
            id: 'goods-receipt',
            title: "Varemottak",
            type: 'item',
            url: '/admin/reception/list',
            icon: icons.IconList,
            breadcrumbs: true
        }
    ]
};

export default logistics;
