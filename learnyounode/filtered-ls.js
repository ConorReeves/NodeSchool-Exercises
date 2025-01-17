'use strict'
const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], function _callback(err, list) {
    if (err) return console.log(err);

    for (let element in list) {
        if (path.extname(`${list[element]}`) === '.'+process.argv[3]) {
            console.log(list[element])
        }
    }
});
