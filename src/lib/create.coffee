_ = require 'lodash'
pd = require('pretty-data').pd

exports.create = (@freshbooks, data, callback) ->
  invoice = _.extend new @freshbooks.Invoice(), data
  invoice.create callback

exports.formatters =
  json: (invoice) ->
    pd.json(invoice)
