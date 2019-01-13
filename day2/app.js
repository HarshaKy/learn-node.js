console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
// const _ = require('lodash');

const notes = require('./notes.js')

var command = process.argv[2];
console.log(process.argv);
console.log('Command: ', command);

if (command == 'add') {
    console.log('Adding new note.');
} else if (command == 'list') {
    console.log('Listing notes.');
} else if (command == 'read') {
    console.log('Reading notes.');
} else if (command == 'remove') {
    console.log('Deleting note.');
} else {
    console.log('Command not recognised.');
}
