
function core(){}
(function(){
    'use strict';

    var THIS = this;

    // INIT CORE. LOADS JS DEPENDENCIES 
    this.init = function(){
        requirejs(['libs/jquery-3.0.0.min', 'app'],
            function(){
                $.extend(true, app, core);
                app.init();
            });
    }();

    // CHECKS IF A GIVEN OBJECT IS DEFINED OR VARIABLE.
    this.defined = function(x){
        return typeof x != 'undefined';
    };

    // DEFINES GETTERS AND SETTERS FOR AN OPTION OBJECT
    this.options = {
        get: function(key){
            return(this[key]);
        },
        set: function(key, value){
            if (THIS.defined(this[key])) {
                this[key] = value;
            }
        },
        push: function(key, value){
            if (THIS.defined(this[key])) {
                this[key].push(value);
            }
        },
        promote: function(key){
            if (THIS.defined(this[key])) {
                this[key]++;
            }
        },
        demote: function(key){
            if (THIS.defined(this[key])) {
                this[key]--;
            }
        }
    };

}).apply(core);
