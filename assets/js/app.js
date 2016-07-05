define(['jquery', 'core', 'options'], function($, core, options) {
    var app = {

        // PRIVATE MEMBERS. OPTIONS FUNCTIONALITY DERIVED FROM CORE.
        options : {
            
        },

        callbacks : {

        },

        toggle : {

        },

        services : {
            test: function(){
                return 'test';
            }
        }
    };

    var init = function(){
        $.extend(true, app.options, options);
        $.extend(true, app, core);
    }();
    
    return app;
});