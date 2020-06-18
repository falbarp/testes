'use strict';

const EventEmitter = require('events');

// creamos un emisor de eventos
const emisor = new EventEmitter();

process.stdin.on('data', function(data) {
    file.write(data);
});

console.log("test");
