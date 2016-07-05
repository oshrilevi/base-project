define(function() {
    var app = function(){
        var THIS = this;
        
        this.init = function(params){
            $.extend(true, app, core, options);
        };

        // PRIVATE MEMBERS. OPTIONS FUNCTIONALITY DERIVED FROM CORE.
        this.options = {
            
        };

        this.callbacks = {

        };

        this.toggle = {

        };

        this.services = {
            test: function(){
                return 'test';
            }
        };
    };
    return app;
});

/*function app(){}
(function(){
    var THIS = this;
    
    this.init = function(params){
        $.extend(true, app, core, options);
    };

    // PRIVATE MEMBERS. OPTIONS FUNCTIONALITY DERIVED FROM CORE.
    this.options = {
        
    };

    this.callbacks = {

    };

    this.toggle = {

    };

    this.services = {

    };
}).apply(app);

app.init();*/