'use strict'

const input = process.argv;
let result = 0;

for (let i = 2; i <= input.length - 1; i++) {
    result += +input[i];
};

console.log(result);