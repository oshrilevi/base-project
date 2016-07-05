
function core(){}
(function(){
    'use strict';

    var THIS = this;

    // CHECKS IF A GIVEN OBJECT IS DEFINED OR VARIABLE.
    this.defined = function(x){
        return typeof x != 'undefined';
    };

    // DEFINES GETTERS AND SETTERS FOR AN OPTION OBJECT
    this.options = {
        add: function(key, value){
            this[key] = value;
            return(this[key]);
        },
        get: function(key){
            return(this[key]);
        },
        set: function(key, value){
            var tmpObj = {};
            if(Object.prototype.toString.call(key)=='[object Object]'){
                // OBJECT 
                tmpObj = key;
            }else{
                // KEY AND VALUE
                tmpObj[key] = value;
            }
            for(var tmp_key in tmpObj) {
                if(THIS.defined(this[tmp_key])) {
                    this[tmp_key] = tmpObj[tmp_key];
                }
            }
            return(this);
        },
        push: function(key, value){
            if (THIS.defined(this[key])) {
                this[key].push(value);
                return(value);
            }
            return('');
        },
        promote: function(key){
            if (THIS.defined(this[key])) {
                this[key]++;
                return(this[key]);
            }
            return('');
        },
        demote: function(key){
            if (THIS.defined(this[key])) {
                this[key]--;
                return(this[key]);
            }
            return('');
        }
    };

}).apply(core);
