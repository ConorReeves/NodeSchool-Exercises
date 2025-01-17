'use strict'
const fs = require('fs')
const path = require('path')

module.exports = function (dir, ext, callback) {
    fs.readdir(dir, function (err, list) {
        if (err) return callback(err);

        let callbackList = [];
        for (let element in list) {
            if (path.extname(`${list[element]}`) === '.'+ext) {
                callbackList.push(list[element])
            }
        }
        callback(null, callbackList);
    })
}