'use strict'
// import * as fs from 'fs'; -- learnyounode requires use of CommonJS :(
const fs = require('fs');

const read = fs.readFileSync(process.argv[2]).toString();
const split = read.split('\n');

console.log(split.length - 1)