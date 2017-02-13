self.$config = {
    home: 'https://raw.githubusercontent.com/egoist/docute/master/README.md',
    landing: './README.md',
    nav: [
        {title: 'Home', path: '/home'},
        {
            title: 'PMS', type: 'dropdown', items: [

            {title: 'PMS对接注意事项', path: './PMS/PMS对接注意事项.md'},
            {type: 'sep'},
            {title: '别样红PMS对接', path: './PMS/别样红PMS对接.md'},
            {title: '绿云PMS对接', path: './PMS/绿云PMS对接.md'}
        ]
        }
    ]
};
