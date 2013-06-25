// Setup Dependencies
var connect = require('connect')
  , express = require('express')
  , io = require('socket.io')
  , port = (process.env.PORT || 8081);

// Get the project environment
var env = require('./config/init.js').initProject(io, express, connect, port);

// Setup routes
require('./config/router.js').createRoutes(env.server);

// Call the server controller
require('./app/server/server.js').init(env);
