[![Circle CI](https://circleci.com/gh/egeniesse/toloServer.svg?style=svg)](https://circleci.com/gh/egeniesse/toloServer)

## Synopsis

Tolo is a dating app that pairs people who are within walking distance of each other. This repo is the server that is handling the app's API requests.

## API Reference

User Routes

Returns profile of userInArea if neither user is blocked by the other user.

GET      '/api/users/?id=id&userInArea=userId'


Returns profile information of specified user.

GET      '/api/users/:id'


Creates a new user

POST    '/api/users/'


Updates a user’s profile

PUT      '/api/users/:id'


Deletes a user’s profile

DELETE   '/api/users/:id'


A more extensive API reference can be found at https://tolodating.herokuapp.com/reference

## Tests

The API has 100% unit test coverage and incorporates Circle CI continuous integration.
