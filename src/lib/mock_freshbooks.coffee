nodemock = require 'nodemock'
_ = require 'lodash'

module.exports = class Freshbooks
  constructor: (base_uri, api_token) ->

  Invoice: class Invoice
    constructor: ->

      mocked = nodemock
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

        mocked.mock('create')
          .takes (err, invoice) ->
            invoice
          .calls(0, [
            null,
            _.extend(mocked, {
              invoice_id: 999
            })
          ])

        return mocked
