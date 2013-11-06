(function() {
  var Freshbooks, nodemock, _;

  nodemock = require('nodemock');

  _ = require('lodash');

  module.exports = Freshbooks = (function() {
    var Invoice;

    function Freshbooks(base_uri, api_token) {}

    Freshbooks.prototype.Invoice = Invoice = (function() {
      function Invoice() {
        var mocked;
        mocked = nodemock.mock('list').takes(function(err, invoices) {
          return invoices;
        }).calls(0, [
          void 0, [
            {
              invoice_id: 1,
              date: '2013-11-05',
              status: 'draft',
              organization: 'Simulated, Inc.',
              amount: 45.6,
              discount: 0,
              paid: 0,
              amount_outstanding: 45.6
            }
          ]
        ]);
        mocked.mock('create').takes(function(err, invoice) {
          return invoice;
        }).calls(0, [
          null, _.extend(mocked, {
            invoice_id: 999
          })
        ]);
        return mocked;
      }

      return Invoice;

    })();

    return Freshbooks;

  })();

}).call(this);
