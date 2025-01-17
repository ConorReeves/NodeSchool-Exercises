'use strict'
const filterFolder = require("./mymodule");

const dir = process.argv[2];
const ext = process.argv[3];

filterFolder(dir, ext, function (err, list) {
    if (err) return console.error(err)
    
    for (let el in list) {
        console.log(list[el])
    }
})