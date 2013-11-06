(function() {
  exports.get = function(freshbooks, callback) {
    var invoice;
    this.freshbooks = freshbooks;
    invoice = new this.freshbooks.Invoice;
    return invoice.list(callback);
  };

  exports.formatters = {
    table: function(invoices) {
      var cliff, keys, list, moment, _;
      _ = require('lodash');
      moment = require('moment');
      cliff = require('cliff');
      keys = ['id', 'date', 'status', 'organization', 'amount', 'discount', 'paid', 'outstanding'];
      list = _.map(invoices, function(invoice) {
        return [invoice.invoice_id, moment(invoice.date).format('YY-MM-DD'), invoice.status, invoice.organization, invoice.amount, "" + invoice.discount + "%", invoice.paid, invoice.amount_outstanding];
      });
      list.unshift(keys);
      return cliff.stringifyRows(list, ['blue', 'white', 'blue', 'white', 'green', 'green', 'green', 'red']);
    }
  };

}).call(this);
