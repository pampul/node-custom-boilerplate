/*!
 * Module dependencies.
 */

var async = require('async')

/**
 * Controllers
 */

var index = require('../app/controllers/index')

/**
 * Expose routes
 */

module.exports = function (app) {

  // user routes
  app.get('/login', index.login)
  app.post('/create', index.create)


  // home route
  app.get('/', index.index)

}