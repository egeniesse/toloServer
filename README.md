[![Circle CI](https://circleci.com/gh/egeniesse/toloServer.svg?style=svg)](https://circleci.com/gh/egeniesse/toloServer)

## Synopsis

Tolo is a dating app that pairs people who are within walking distance of each other. This repo has the code for the server that handles the API requests.

## API Routes

* GET      '/api/users/?id=id&userInArea=userId' - Returns profile of userInArea if neither user is blocked by the other user.
* GET      '/api/users/:id' - Returns profile information of specified user.
* POST    '/api/users/' - Creates a new user
* PUT      '/api/users/:id' - Updates a user’s profile
* DELETE   '/api/users/:id' - Deletes a user’s profile
* GET      'api/relationship/?id=id&relationship=relationsipName' - Gets all users that are associated with another user based on a specified relationship regardless of the direction of the relationship.
* POST     '/api/relationship/' - Creates a new relationship
* DELETE   '/api/relationship/' - Deletes a relationship

A more extensive API reference can be found at https://tolodating.herokuapp.com/reference

## Tests

The API has 100% unit test coverage and incorporates Circle CI continuous integration.
