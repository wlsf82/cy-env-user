# cy-env-user

Cypress sample project to demonstrate how to log in using different sensitive data based on a `userType` environment variable.

## Pre-requirements

It is required to have Node.js and npm installed to run this project.

> I used versions `v14.17.0` and `6.14.13` of Node.js and npm, respectively. I suggest you use the same or later versions.

## Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.

## Tests

In this project, it's possible to run tests as admin, or non-admin users.

### Run tests as admin

To run the tests in headless mode as admin, use the command `npm run test:admin`.

To open the test runner and run the tests as admin, use the command `npm run cy:open:admin`.

### Run tests as non-admin

To run the tests in headless mode as non-admin, use the command `npm test` (or `npm t` for the short version.)

To open the test runner and run the tests as non-admin, use the command `npm run cy:open`.

## Support this project

If you want to support this project, leave a ⭐.

___

Created with 💙 by [Walmyr](https://walmyr.dev).
