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
    },
    '--create (--data)': function(test) {
      var env, json;
      env = 'freshbooks_config=tests/config_file';
      json = JSON.stringify({
        client_id: 1,
        status: 'draft',
        notes: 'test invoice'
      });
      return test.doesNotThrow(function() {
        return nixt().expect(function(result) {
          if (!(result.stdout.match(/test invoice/))) {
            return new Error('Invoice notes should be printed');
          }
        }).run("" + env + " bin/freshbooks-invoice --create --data '" + json + "'").code(0).end(test.done);
      });
    }
  };

}).call(this);
