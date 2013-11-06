(function() {
  var pd, _;

  _ = require('lodash');

  pd = require('pretty-data').pd;

  exports.create = function(freshbooks, data, callback) {
    var invoice;
    this.freshbooks = freshbooks;
    invoice = _.extend(new this.freshbooks.Invoice(), data);
    return invoice.create(callback);
  };

  exports.formatters = {
    json: function(invoice) {
      return pd.json(invoice);
    }
  };

}).call(this);
