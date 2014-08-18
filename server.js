'use strict';
var Hapi = require('hapi');
var path = require('path');

var server = Hapi.createServer('localhost', Number(process.argv[2]) || 1337);

server.route({
  path: '/{param*}',
  method: 'GET',
  handler: {
    directory: { 
      path: path.join(__dirname, 'public/')
    }
  }
});

server.start();
