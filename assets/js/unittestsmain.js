/*global QUnit: false, require: false */

require.config({
    paths: {
        'QUnit': 'libs/qunit-2.0.0'
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
    ['QUnit', 'tests/coreTest', 'tests/optionsTest'],
    function(QUnit, coreTest, optionsTest) {
        // run the tests.
        coreTest.run();
        optionsTest.run();
        
        // start QUnit.
        QUnit.load();
        QUnit.start();
    }
);