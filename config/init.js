var exports = module.exports;

// Set usefull variables
exports.initProject = function (io, express, connect, port, envNode) {

  // Get config
  // Load configurations
  // if test env, load example file
  var env = process.env.NODE_ENV || envNode
    , config = require('./config')[env]
    , mongoose = require('mongoose')
    , fs = require('fs')


  console.log('Config DB : ' + config.db);

  mongoose.connection.on('open', function (ref) {
    console.log('Connected to mongo server.');
  });
  mongoose.connection.on('error', function (err) {
    console.log('Could not connect to mongo server!');
    console.log(err);
    throw (err);
  });

  // Bootstrap db connection
  mongoose.connect(config.db)

  // Bootstrap models
  var modelsPath = './app/models'
  fs.readdirSync(modelsPath).forEach(function (file) {
    if (~file.indexOf('.js')) require('../app/models' + '/' + file)
  })

  // Get port
  var port = process.env.PORT || 3000

  // Setup Express
  var app = express();

  var http = require('http')
    , server = http.createServer(app)
    , io = require('socket.io').listen(server);


  // Start the app by listening on <port>
  console.log('Express app started on port '+port)
  server.listen(port);

  app.use(connect.static('./public'));
  require('./express.js')(app, config);


  var project = new Object();

  project.app = app;
  project.express = express;
  project.port = port;
  project.connect = connect;
  project.io = io;

  return project;

}