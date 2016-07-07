define(
    ['app'],
    function(app) {
        var run = function() {
            QUnit.test('App', function(assert) {
                var key = 'test_key', value = 'test_value';

                // 1. 
                assert.ok(app.loaded()==true, 'App loaded');

                // 2. CHECK IF A VALUE IS ADDED PROPERLY
                app.options.add(key, value);
                assert.ok( app.options.get(key) == value, 'Adding a new option.');

                // 3. CHECK IF A VALUE IS FETCHED PROPERLY
                assert.ok(app.options.get(key) == value, "Fetching a newely added option.");
            });
            
        };
        return {run: run}
    }
);