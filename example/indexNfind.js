'use strict';
var findex = require('..');

function functionToFind() {
  console.log('as you can see I am on lines 4 - 6 in indexNFind.js');
}

functionToFind();

findex(function (err, index) {
  if (err) return console.error(err);
  console.log(index);
  console.log(index.find(functionToFind));
});
