/*global QUnit: false, require: false */

var components_base_path  =  '../components/';
var shared_libs_base_path =  '../assets/js/libs/';

function getComponentPath(comp, mode){
    var ret = '';
    switch(mode){
        case 'js':
            ret = components_base_path + comp + '/js/' + comp;
            break;
        case 'test':
            ret = components_base_path + comp + '/tests/' + comp + 'Test';
            break;
    }
    return ret;
}

require.config({
    paths: {
        'app': components_base_path + getComponentPath('app', 'js'),
        'core': components_base_path + getComponentPath('core', 'js'),
        'options': components_base_path + getComponentPath('options', 'js'),

        'jquery': shared_libs_base_path + 'jquery-3.0.0.min',
        'QUnit':  shared_libs_base_path + 'qunit-2.0.0'
    },
    shim: {
       'QUnit': {
           exports: 'QUnit',
           init: function() {
               QUnit.config.autoload = false;
               QUnit.config.autostart = false;
           }
       } 
    }
});

// require the unit tests.
require(
    ['QUnit', getComponentPath('core', 'test'), getComponentPath('options', 'test'), getComponentPath('app', 'test')],
    function(QUnit, coreTest, optionsTest, appTest) {
        // run the tests.
        coreTest.run();
        optionsTest.run();
        appTest.run();
        
        // start QUnit.
        QUnit.load();
        QUnit.start();
    }
);