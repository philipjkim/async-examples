desc('Runs the unit tests');
task('test', function () {
  var cmd = './node_modules/nodeunit/bin/nodeunit test';
  jake.exec(cmd, function() {
    console.log('All tests passed.');
    complete();
  }, {printStdout: true});
}, {async: true});
