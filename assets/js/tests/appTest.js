define(
    ['app'],
    function(app) {
        var run = function() {
            QUnit.test('App', function(assert) {
                // 1. 
                assert.ok(app.services.test()=='test', 'Dummy test');
            });
        };
        return {run: run}
    }
);