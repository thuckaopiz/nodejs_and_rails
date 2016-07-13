var socket  = require( './node_modules/socket.io' );
var express = require('./node_modules/express');
var app     = express();
var server  = require('http').createServer(app);
var io      = socket.listen( server );
var port    = process.env.PORT || 3002;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});


io.on('connection', function (socket) {
  socket.on( 'new_count_message', function( data ) {
    io.sockets.emit( 'new_count_message', { 
      new_count_message: data.new_count_message

    });
  });

  socket.on( 'update_count_message', function( data ) {
    io.sockets.emit( 'update_count_message', {
      update_count_message: data.update_count_message 
    });
  });

  socket.on( 'new_article', function( data ) {
    io.sockets.emit( 'new_articles', data);
  });
});
