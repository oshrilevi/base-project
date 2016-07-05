function app(){}
(function(){
    var THIS = this;
    
    this.init = function(params){
        $.extend(true, app, core);
        console.log('App init');
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

    this.test = function(val){
        return(val);
    };
}).apply(app);

app.init();