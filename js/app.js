require.config({
    shim:{
        'bootstrap-popover':{
            deps:['jquery', 'bootstrap-tooltip'],
            exports:'Popover'
        },

        'bootstrap-tooltip':{
            deps:['jquery'],
            exports:'Tooltip'
        }
    },
    paths:{
        'jquery':'js/lib/jquery-1.9.1',
        'bootstrap-tooltip':'js/lib/bootstrap-tooltip',
        'bootstrap-popover':'js/lib/bootstrap-popover'
    }

})

require(['jquery', 'bootstrap-tooltip', 'bootstrap-popover'], function ($) {
        $('a[rel=tooltip]').tooltip();
        $('a[rel=popover]').popover();
});