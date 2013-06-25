/**
 * User: Flo
 * Date: 24/06/13
 * Time: 23:32
 */
var exports = module.exports;

exports.init = function(env){

  // exemple
  console.log('Listening on http://0.0.0.0:' + env.port);

  // Listening for a connection
  env.io.sockets.on('connection', function(socket){
    console.log('Client connected');
    // Receiving a query
    socket.on('message', function(data){
      console.log('Message sent from the client at ' + data);
      socket.emit('server_message', 'Message received captain Kirk !');
    });
    socket.on('disconnect', function () {
      console.log('Client Disconnected.');
    });
  });


  // Todo

}
