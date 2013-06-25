var exports = module.exports;


exports.createRoutes = function(server) {

  server.get('/', function (req, res) {
    res.render('index.jade', {
      locals: {
        title: 'Your Page Title', description: 'Your Page Description', author: 'Your Name', analyticssiteid: 'XXXXXXX'
      }
    });
  });


//A Route for Creating a 500 Error (Useful to keep around)
  server.get('/500', function (req, res) {
    throw new Error('This is a 500 Error');
  });

//The 404 Route (ALWAYS Keep this as the last route)
  server.get('/*', function (req, res) {
    throw new NotFound;
  });

  function NotFound(msg) {
    this.name = 'NotFound';
    Error.call(this, msg);
    Error.captureStackTrace(this, arguments.callee);
  }

}