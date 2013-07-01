// Setup Dependencies
var connect = require('connect')
  , express = require('express')
  , io = require('socket.io')
  , port = (process.env.PORT || 8081);

// Set the environment (production, test or development)
var envNode = 'development';

// Get the project environment
var env = require('./config/init.js').initProject(io, express, connect, port, envNode);

// Setup routes
require('./config/routes.js')(env.app);

// Launch server listener
require('./app/server/server.js').init(env);
