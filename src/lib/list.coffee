exports.get = (@freshbooks, callback) ->
  invoice = new @freshbooks.Invoice
  invoice.list callback

exports.formatters =
  table: (invoices) ->
    _ = require 'lodash'
    moment = require 'moment'
    cliff = require 'cliff'

    keys = [
      'id',
      'date',
      'status',
      'organization',
      'amount',
      'discount',
      'paid',
      'outstanding'
    ]

    list = _.map invoices, (invoice) ->
      [
        invoice.invoice_id,
        moment(invoice.date).format('YY-MM-DD'),
        invoice.status,
        invoice.organization,
        invoice.amount,
        "#{invoice.discount}%",
        invoice.paid,
        invoice.amount_outstanding,
      ]

    list.unshift(keys)

    cliff.stringifyRows list, [
      'blue',
      'white',
      'blue',
      'white',
      'green',
      'green',
      'green',
      'red'
    ]
