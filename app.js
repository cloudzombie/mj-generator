'use strict';

var totemize = require('totemize');

var rand  = totemize({
  adjectives: require('./libs/adjectives'),
  nouns: require('./libs/nouns'),
  separator:  '-'
});

var val = rand + '-' + Math.floor(Math.random() * Math.pow(2, 12));

console.log(val.toLowerCase());

process.exit(0);
