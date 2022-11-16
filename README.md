# Cypress - Básico - Lidiane

Exemplo de projeto referente a testes automatizado considerando o framework CYPRESS.

## Pre-requirements

É pré-requisito ter Node.js e npm intalados para exeuctar o projeto

> Eu usei as versões `v16.13.2` and `8.1.2` of Node.js and npm, respectively. I suggest you use the same or later versions.

> **Note:** Before running the tests, make a copy of the `cypress.env.example.json` file as `cypress.env.json`, which in the real world, you would update with valid credentials.

> The `cypress.env.json` file is included on [`.gitignore`](./.gitignore) and you're safe that confidential info won't be versioned.

## Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.

## Tests

You can ru the testes simulating a desktop or mobile viewport.

### Desktop

Run `npm test` (or `npm t` for the short version)to run the est in headless mode on a desktop viewport.

Or, run `npm run cy:open` to open Cypress in interactive mode.

### Mobile

Run `npm run test:mobile` to run the test in headless mode on a mobile viewport.

Or, run `npm run cy:open:mobile` to open Cypress in interactive mode on a mobile viewport.

## Support this project

If you want to support this project, leave a ⭐.

___

This project was created with 💚 by [Walmyr](https://walmyr.dev).