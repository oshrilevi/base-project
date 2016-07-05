define(
    ['options'],
    function(options) {
        var run = function() {
            QUnit.test('Options', function(assert) {
                var res = '', key = 'test_key', value = 'test_value', value_override = 'test_value_override', obj_option = {'test_key': 'object value'};

                // 1. CHECK IF A VALUE IS ADDED PROPERLY
                options.add(key, value);
                assert.ok( options.get(key) == value, 'Adding a new option.');

                // 2. CHECK IF A VALUE IS FETCHED PROPERLY
                assert.ok(options.get(key) == value, "Fetching a newely added option.");
                
                // 3. CHECK IF A VALUE IS SET PROPERLY USING KEY AND VALUE
                res = options.set(key, value_override);
                assert.ok(options.get(key) == value_override, "Update option using key and value.");

                // 4. CHECK IF A VALUE IS SET PROPERLY USING AN OBJECT LITERAL
                options.set(obj_option);
                assert.ok(options.get(key) == obj_option.test_key, "Update option using an object literal.");

                // 5. VERIFY THE OPTIONS PROMOTE METHOD 
                options.set(key, 1);
                options.promote(key);
                assert.ok(options.get(key) == 2, "Promote an option member.");

                // 6. VERIFY THE OPTIONS PROMOTE METHOD 
                options.set(key, 2);
                options.demote(key);
                assert.ok(options.get(key) == 1, "Demote an option member.");

            });
        };
        return {run: run}
    }
);