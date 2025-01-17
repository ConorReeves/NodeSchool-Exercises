'use strict'
const http = require('http');

const url = process.argv[2];

http.get(url, function _callback (response) {
    
    response.on('data', (data) => {
        console.log(data.toString())
    });

    response.on('error', console.error);

}).on('error', console.error)