define(function() {
    var core = {

        // CHECKS IF A GIVEN OBJECT OR VARIABLE IS DEFINED.
        defined: function(x){
            return typeof x != 'undefined';
        }

    };
    return core;
});

/*function core(){}
(function(){
    'use strict';

    var THIS = this;

    // CHECKS IF A GIVEN OBJECT IS DEFINED OR VARIABLE.
    this.defined = function(x){
        return typeof x != 'undefined';
    };

}).apply(core);*/