# freshbooks-invoice 

> A command-line interface for interacting with Freshbooks Invoices

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


