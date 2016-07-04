function app(){}
(function(){
    var THIS = this;
    
    this.init = function(params){
        console.log('App init');
    };

    // PRIVATE MEMBERS. GETTER AND SETTER ARE DERIVED FROM THE CORE.
    this.options = {
        test: 'test'
    };

    this.callbacks = {

    };

    this.toggle = {

    };

    this.services = {

    };
}).apply(app);