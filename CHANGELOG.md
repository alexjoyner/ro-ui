# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
## 0.12.0 - 2019-2-25
### Features
- Added Authenticated: middleware to check if password is correct
- Added HashPass: middleware to get a hash from a password to store in a database
- Added JWT:
    - createToken: creates an expiring token with a given JSON body
    - verify: checks to make sure a token is valid, and return the body if it is
- Added ERRORS helpers: An object of common errors with their corresponding error codes

## 0.11.1 - 2019-2-22
- Fixed query accepts function or object and options
  - a function will be passes the requests object to get parameters from

## 0.11.0 - 2019-2-22
### Features
- Added sendLocal: helper to easily send back a var from express locals

## 0.10.0 - 2019-2-22
### Features
- Added getTextFromFile: helper function to easily get file as text. Good for when making queries using text from sql file.

## 0.9.0 - 2019-2-22
### Features
- Added Helmet dependency for basic security precations
- Added global express error handler to better catch all errors
### Changed
- getExpressApp is now makeApp
- runExpressApp is now runApp
- runQuery is now query
- notify is now sendMessage
- All exports are now structured as express middleware

## 0.8.0 - 2019-1-9
### Features
- utils.notify() = Twilio Support! There is now an easy utility to access text notifications

## 0.7.1 - 2019-1-9
### Fixed
- runQuery process

## 0.7.0 - 2019-1-9
### Changed
- query results must be handled within base app.  runQuery just returns results and throws errors

## 0.6.0 - 2018-11-19
### Changed
- all main imports brought in with function call instead of base import

## 0.5.0 - 2018-11-19
### Changed
- Changed run query process to return an express middleware function

## < 0.4.0 [UNDOCUMENTED] :(