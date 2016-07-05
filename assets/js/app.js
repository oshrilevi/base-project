function app(){}
(function(){
    var THIS = this;
    
    this.init = function(params){
        $.extend(true, app, core);
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

app.init();