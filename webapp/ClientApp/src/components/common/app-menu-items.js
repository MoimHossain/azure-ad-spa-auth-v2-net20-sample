

const MenuItems = [{
    icon: 'newspaper',
    route: 'dashboard',
    text: 'Dashboard'
}, {
    groupHeader: 'Projects',
    items: [{
        icon: 'file text',
        route: 'projects',
        text: 'Recent'
    }, {
        icon: 'settings',
        route: 'projects',
        text: 'All'
    }]
}, {
    groupHeader: 'Cost Monitoring',
    items: [{
        icon: 'file text',
        route: 'costoverview',
        text: 'Power BI'
    }, {
        icon: 'settings',
        route: 'pricesheet',
        text: 'Price sheet'
    }]
}, {
    groupHeader: 'Patterns and principles',
    items: [{
        icon: 'file text',
        route: 'cap',
        text: 'Cloud Architecture Principles'
    }, {
        icon: 'settings',
        route: 'devops',
        text: 'DevOps priciples'
    }]
},
{
    icon: 'settings',
    badgeCount: 24,
    badgeColor: 'red',
    route: 'recommendations',
    text: 'Recommendations'
},
{
    icon: 'settings',
    route: 'settings',
    text: 'Settings'
}];

export default MenuItems;