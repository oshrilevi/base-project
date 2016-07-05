
QUnit.test( "Testing options object", function( assert ) {
    assert.expect(8);

    var res = '', key = 'test_key', value = 'test_value', value_override = 'test_value_override', obj_option = {'test_key': 'object value'};

    // 1. CHECK IF A VALUE IS NOT DEFINED
    assert.ok(app.defined(app.options.test_key) == false, "Detecting an undefined option.");

    // 2. CHECK IF A VALUE IS ADDED PROPERLY
    assert.ok(app.options.add(key, value) == value, "Adding a new option.");

    // 3. CHECK IF A VALUE IS DEFINED
    assert.ok(app.defined(app.options.test_key) == true, "Detecting a defined option.");

    // 4. CHECK IF A VALUE IS FETCHED PROPERLY
    assert.ok(app.options.get(key) == value, "Fetching a newely added option.");
    
    // 5. CHECK IF A VALUE IS SET PROPERLY USING KEY AND VALUE
    res = app.options.set(key, value_override);
    assert.ok(app.options.get(key) == value_override, "Update option using key and value.");

    // 6. CHECK IF A VALUE IS SET PROPERLY USING AN OBJECT LITERAL
    app.options.set(obj_option);
    assert.ok(app.options.get(key) == obj_option.test_key, "Update option using an object literal.");

    // 7. VERIFY THE OPTIONS PROMOTE METHOD 
    app.options.set(key, 1);
    app.options.promote(key);
    assert.ok(app.options.get(key) == 2, "Promote an option member.");

    // 8. VERIFY THE OPTIONS PROMOTE METHOD 
    app.options.set(key, 2);
    app.options.demote(key);
    assert.ok(app.options.get(key) == 1, "Demote an option member.");
});