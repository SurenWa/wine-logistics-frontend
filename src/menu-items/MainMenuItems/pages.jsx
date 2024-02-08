// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconKey, IconBug, IconUser, IconCategory, IconBuildingStore, IconList, IconCellSignal5, IconReport, IconLogout, IconFileReport, IconReportAnalytics } from '@tabler/icons';

// constant
const icons = { IconBug, IconKey, IconUser, IconCategory, IconBuildingStore, IconList, IconCellSignal5, IconReport, IconLogout, IconFileReport, IconReportAnalytics };

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: <FormattedMessage id="pages" />,
    //caption: <FormattedMessage id="pages-caption" />,
    icon: icons.IconKey,
    type: 'group',
    children: [
        // {
        //     id: 'maintenance',
        //     title: <FormattedMessage id="maintenance" />,
        //     type: 'collapse',
        //     icon: icons.IconUser,
        //     children: [
        //         {
        //             id: 'error',
        //             title: <FormattedMessage id="error-404" />,
        //             type: 'item',
        //             url: '/pages/error',
        //             target: true
        //         },
        //         {
        //             id: 'coming-soon',
        //             title: <FormattedMessage id="coming-soon" />,
        //             type: 'collapse',
        //             children: [
        //                 {
        //                     id: 'coming-soon1',
        //                     title: (
        //                         <>
        //                             <FormattedMessage id="coming-soon" /> 01
        //                         </>
        //                     ),
        //                     type: 'item',
        //                     url: '/pages/coming-soon1',
        //                     target: true
        //                 },
        //                 {
        //                     id: 'coming-soon2',
        //                     title: (
        //                         <>
        //                             <FormattedMessage id="coming-soon" /> 02
        //                         </>
        //                     ),
        //                     type: 'item',
        //                     url: '/pages/coming-soon2',
        //                     target: true
        //                 }
        //             ]
        //         },
        //         {
        //             id: 'under-construction',
        //             title: <FormattedMessage id="under-construction" />,
        //             type: 'item',
        //             url: '/pages/under-construction',
        //             target: true
        //         }
        //     ]
        // },
        {
            id: 'analyser',
            title: "Analyser",
            type: 'item',
            url: '/analytics',
            icon: icons.IconReportAnalytics,            
        },
        {
            id: 'brukere',
            title: "Brukere",
            type: 'item',
            url: '/user/list',
            icon: icons.IconUser,            
        },
        {
            id: 'kategorier',
            title: "Kategorier",
            type: 'item',
            url: '/category/list',
            icon: icons.IconCategory,            
        },
        {
            id: 'produkter',
            title: "Produkter",
            type: 'item',
            url: '/product/list',
            icon: icons.IconBuildingStore,            
        },
        {
            id: 'mottak',
            title: "Mottak",
            type: 'item',
            url: '/reception/list',
            icon: icons.IconList,            
        },
        {
            id: 'varetelling',
            title: "Varetelling",
            type: 'item',
            url: '/stockcount/list',
            icon: icons.IconCellSignal5,            
        },
        {
            id: 'salgsrapport',
            title: "Salgsrapport",
            type: 'item',
            url: '/salesreport/list',
            icon: icons.IconReport,            
        },
        {
            id: 'lageroversikt',
            title: "Lageroversikt",
            type: 'item',
            url: '/stockoverview/list',
            icon: icons.IconFileReport,            
        },
        {
            id: 'loggut',
            title: "Logg Ut",
            type: 'item',
            url: '/sample-page',
            icon: icons.IconLogout,            
        },
    ]
};

export default pages;
