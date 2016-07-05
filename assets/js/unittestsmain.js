/*global QUnit: false, require: false */

require.config({
    paths: {
        'QUnit': 'libs/qunit-2.0.0',
        'jquery': 'libs/jquery-3.0.0.min'
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
    ['QUnit', 'tests/coreTest', 'tests/optionsTest', 'tests/appTest'],
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