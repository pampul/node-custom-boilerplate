var exports = module.exports;

// Set usefull variables
exports.initProject = function (io, express, connect, port) {

  // Setup Express
  var server = express.createServer();
  server.configure(function () {
    server.set('views', './app/views');
    server.set('view options', { layout: false });
    server.use(connect.bodyParser());
    server.use(express.cookieParser());
    server.use(express.session({ secret: "shhhhhhhhh!"}));
    server.use(connect.static('./public'));
    server.use(server.router);
  });

// Setup the errors
  server.error(function (err, req, res, next) {
    if (err instanceof NotFound) {
      res.render('404.jade', { locals: {
        title: '404 - Not Found', description: '', author: '', analyticssiteid: 'XXXXXXX'
      }, status: 404 });
    } else {
      res.render('500.jade', { locals: {
        title: 'The Server Encountered an Error', description: '', author: '', analyticssiteid: 'XXXXXXX', error: err
      }, status: 500 });
    }
  });
  server.listen(port);

// Setup Socket.IO
  var io = io.listen(server);

  var project = new Object();

  project.server = server;
  project.express = express;
  project.port = port;
  project.connect = connect;
  project.io = io;

  return project;

}

function NotFound(msg) {
  this.name = 'NotFound';
  Error.call(this, msg);
  Error.captureStackTrace(this, arguments.callee);
}