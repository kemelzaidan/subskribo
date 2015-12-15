# Subskribo

Subskribo is a simple Ember application to automate the process of creating a
default email signature on corporate environments. Originally created to
Locaweb (Brazil's largest hosting company), it can be customized to other
company needs with the same purpose, since it is released under Affero GPL 3
(take a look at the LICENSE.txt file for the complete license).

The user just needs to fill the form with its own information and click on the
copy button in order to copy the entire HTML signature code to the clipboard
before pasting it on the email client.

The name _Subskribo_ comes from the [Esperanto](https://en.wikipedia.org/wiki/Esperanto)
 word for "signature".

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/kemelzaidan/subskribo` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit the app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Run the production command above, setup a web server and deploy the files
generated at the `dist` folder to the server. Done!
