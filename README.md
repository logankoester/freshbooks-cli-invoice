# FreshBooks: CLI Invoice
> A command-line interface for interacting with Freshbooks Invoices

[![Build Status](https://secure.travis-ci.org/logankoester/freshbooks-cli-invoice.png?branch=master)](http://travis-ci.org/logankoester/freshbooks-cli-invoice)
[![status](https://sourcegraph.com/api/repos/github.com/logankoester/freshbooks-cli-invoice/badges/status.png)](https://sourcegraph.com/github.com/logankoester/freshbooks-cli-invoice)
[![Dependency Status](https://david-dm.org/logankoester/freshbooks-cli-invoice.png)](https://david-dm.org/logankoester/freshbooks-cli-invoice)
[![devDependency Status](https://david-dm.org/logankoester/freshbooks-cli-invoice/dev-status.png)](https://david-dm.org/logankoester/freshbooks-cli-invoice#info=devDependencies)
[![Gittip](http://img.shields.io/gittip/logankoester.png)](https://www.gittip.com/logankoester/)


[![NPM](https://nodei.co/npm/freshbooks-cli-invoice.png?downloads=true)](https://nodei.co/npm/freshbooks-cli-invoice/)
## Overview

[freshbooks-cli](https://github.com/logankoester/freshbooks-cli) is a
command-line interface to the [FreshBooks](http://freshbooks.com/) API.

`freshbooks-cli-invoice` implements the `invoice` subcommand for
[freshbooks-cli](https://github.com/logankoester/freshbooks-cli).


## Usage

    --list, -l   - Display a full list of invoices

    --create, -c - Create an invoice from JSON data, either
                   read from STDIN or passed to --data as a string

    --data JSON - Invoice data for --create
    
    --help, -h - Display this message

See http://developers.freshbooks.com/docs/invoices/ for more information.


## Examples

    # Displaying the full list of invoices
    $ freshbooks projects --list


## Contributing

The test suite is implemented with
[nodeunit](https://github.com/caolan/nodeunit) and
[nixt](https://github.com/vesln/nixt).

To rebuild & run the tests

    $ git clone https://github.com/logankoester/freshbooks-cli-invoice.git
    $ cd freshbooks-cli-invoice
    $ npm install
    $ grunt test

You can use `grunt watch` to automatically rebuild and run the test suite when
files are changed.

Use `npm link` from the project directory to tell `freshbooks-cli` to use
your modified `freshbooks-cli-invoice` during development.

To contribute back, fork the repo and open a pull request with your changes.


## License

Copyright (c) 2013 Logan Koester
Licensed under the MIT license.

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/logankoester/freshbooks-cli-invoice/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

[![xrefs](https://sourcegraph.com/api/repos/github.com/logankoester/freshbooks-cli-invoice/badges/xrefs.png)](https://sourcegraph.com/github.com/logankoester/freshbooks-cli-invoice)
[![funcs](https://sourcegraph.com/api/repos/github.com/logankoester/freshbooks-cli-invoice/badges/funcs.png)](https://sourcegraph.com/github.com/logankoester/freshbooks-cli-invoice)
[![top func](https://sourcegraph.com/api/repos/github.com/logankoester/freshbooks-cli-invoice/badges/top-func.png)](https://sourcegraph.com/github.com/logankoester/freshbooks-cli-invoice)
[![library users](https://sourcegraph.com/api/repos/github.com/logankoester/freshbooks-cli-invoice/badges/library-users.png)](https://sourcegraph.com/github.com/logankoester/freshbooks-cli-invoice)
[![authors](https://sourcegraph.com/api/repos/github.com/logankoester/freshbooks-cli-invoice/badges/authors.png)](https://sourcegraph.com/github.com/logankoester/freshbooks-cli-invoice)
