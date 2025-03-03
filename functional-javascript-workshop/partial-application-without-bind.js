'use strict'
var slice = Array.prototype.slice

const logger = (namespace) => {
    return function logToConsole() {
        console.log.apply(console, [namespace].concat(slice.call(arguments)))
    }
}

module.exports = logger;