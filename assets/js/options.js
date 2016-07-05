define(['core'], function(core) {
    var options = {

        add: function(key, value){
            this[key] = value;
            return(this);
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
                if(core.defined(this[tmp_key])) {
                    this[tmp_key] = tmpObj[tmp_key];
                }
            }
            return(this);
        },
        push: function(key, value){
            if (core.defined(this[key])) {
                this[key].push(value);
                return(value);
            }
            return('');
        },
        promote: function(key){
            if (core.defined(this[key])) {
                this[key]++;
                return(this[key]);
            }
            return('');
        },
        demote: function(key){
            if (core.defined(this[key])) {
                this[key]--;
                return(this[key]);
            }
            return('');
        }

    };
    return options;
});


/*function options(){}
(function(){
    'use strict';

    var THIS = this;

    // DEFINES GETTERS AND SETTERS FOR AN OPTION OBJECT
    this.options = {
        add: function(key, value){
            this[key] = value;
            return(this);
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
                if(core.defined(this[tmp_key])) {
                    this[tmp_key] = tmpObj[tmp_key];
                }
            }
            return(this);
        },
        push: function(key, value){
            if (core.defined(this[key])) {
                this[key].push(value);
                return(value);
            }
            return('');
        },
        promote: function(key){
            if (core.defined(this[key])) {
                this[key]++;
                return(this[key]);
            }
            return('');
        },
        demote: function(key){
            if (core.defined(this[key])) {
                this[key]--;
                return(this[key]);
            }
            return('');
        }
    };

}).apply(options);*/