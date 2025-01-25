'use strict'

function logger() {
    return console.log.bind(this, ...arguments)
}                      
module.exports = logger;

