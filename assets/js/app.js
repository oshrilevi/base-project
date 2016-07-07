define(['jquery', 'core', 'options'], function($, core, options) {
    var app = {

        // PRIVATE MEMBERS. OPTIONS FUNCTIONALITY DERIVED FROM CORE.
        options: {
            
        },

        callbacks: {

        },

        toggle: {

        },

        loaded: function(){
            return true;
        }
    };

    var init = function(){
        $.extend(true, app.options, options); // INHERIT OPTIONS FUNCTIONALITY FROM OPTIONS OBJECT
        // $.extend(true, app, core); // COULD INHERIT CORE FUNCTIONALITY IF NEEDED OR JUST USE CORE AS IT'S AVAILABLE.
    }();
    
    return app;
});