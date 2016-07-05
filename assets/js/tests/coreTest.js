define(
    ['core'],
    function(core) {
        var run = function() {
            QUnit.test('Core', function(assert) {
                // 1. CHECKING IF UNDEFINED OBJECT IS DETECTED PROPERLY
                assert.ok(core.defined(core.non_existing_key)==false, 'Testing an undefined object.');

                // 2. CHECKING IF A DEFINED OBJECT IS DETECTED PROPERLY
                assert.ok(core.defined(core.defined)==true, 'Testing a defined object.');
            });
        };
        return {run: run}
    }
);