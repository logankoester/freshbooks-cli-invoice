(function() {
  var nixt, showHelp;

  nixt = require('nixt');

  showHelp = function(result) {
    if (!(result.stdout.match(/--help/))) {
      return new Error('--help should be mentioned');
    }
  };

  exports.group = {
    'No options': function(test) {
      return test.doesNotThrow(function() {
        return nixt().expect(showHelp).run('bin/freshbooks-invoice').code(0).end(test.done);
      });
    },
    '--help': function(test) {
      return test.doesNotThrow(function() {
        return nixt().expect(showHelp).run('bin/freshbooks-invoice --help').code(0).end(test.done);
      });
    },
    '--list': function(test) {
      return test.doesNotThrow(function() {
        return nixt().expect(function(result) {
          if (!(result.stdout.match(/Simulated, Inc./))) {
            return new Error('Simulated invoice should be listed');
          }
        }).run('freshbooks_config=tests/config_file bin/freshbooks-invoice --list').code(0).end(test.done);
      });
    }
  };

}).call(this);
