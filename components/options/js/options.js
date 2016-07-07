define(['core'], function(core) {
    var options = {

        // ADDS AN ENTRY OR A GROUP OF ENTRIES TO THE OPTIONS
        add: function(key, value){
            this[key] = value;
            return(this);
        },
        // RETURNS THE VALUE FOR AN ENTRY
        get: function(key){
            return(this[key]);
        },
        // SETS AN ENTRY OR A GROUP OF ENTRIES
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
        // PUSH A VALUE TO AN ARRAY ENTRY
        push: function(key, value){
            if (core.defined(this[key])) {
                this[key].push(value);
                return(value);
            }
            return('');
        },
        // PROMOTE AN ENTRY
        promote: function(key){
            if (core.defined(this[key])) {
                this[key]++;
                return(this[key]);
            }
            return('');
        },
        // DEMOTE AN ENTRY//
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