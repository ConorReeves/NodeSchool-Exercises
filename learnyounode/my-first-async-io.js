'use strict'
const fs = require('fs');

function logLines() {
    fs.readFile(process.argv[2], 'utf-8', function _callback(err, content) {
        if (err) return console.log(err);
        let lineCount = content.split('\n').length - 1;
        console.log(lineCount);
    })
}

logLines();