# freshbooks-cli-invoice 
[![Build Status](https://secure.travis-ci.org/logankoester/freshbooks-cli-invoice.png?branch=master)](http://travis-ci.org/logankoester/freshbooks-cli-invoice)

> A command-line interface for interacting with Freshbooks Invoices

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


