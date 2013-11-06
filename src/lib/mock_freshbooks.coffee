nodemock = require 'nodemock'

module.exports = class Freshbooks
  constructor: (base_uri, api_token) ->

  Invoice: class Invoice
    constructor: ->
      return nodemock
        .mock('list')
        .takes (err, invoices) ->
          invoices
        .calls(0, [
          undefined, [
            {
              invoice_id: 1
              date: '2013-11-05'
              status: 'draft'
              organization: 'Simulated, Inc.'
              amount: 45.6
              discount: 0
              paid: 0
              amount_outstanding: 45.6
            }
          ]
        ])
