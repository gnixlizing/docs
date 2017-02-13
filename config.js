self.$config = {
    // use the readme in repo
    home: 'https://raw.githubusercontent.com/egoist/docute/master/README.md',
    landing:'./README.md',
    nav: [
        {title: 'Home', path: '/home'},
        {
            title: 'PMS', type: 'dropdown', items: [
            {title: 'PMS对接注意事项',type:'label', path: './PMS/PMS对接注意事项.md'}
        ]
        }
    ]
};
