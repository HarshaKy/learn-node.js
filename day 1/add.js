console.log('Starting add.js');

const notes = require('./notes.js');
const _ = require('lodash');

console.log(_.isString(true));
console.log(_.isString('Harsha'));

var filteredArray = _.uniq(['harsha', 1, 'harsha', 1, 2]);
console.log(filteredArray);

// console.log("required notes.js")


var res = notes.add(5, 6);
console.log(res);