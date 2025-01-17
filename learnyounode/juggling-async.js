'use strict'
const http = require('http'),
      bl = require('bl')


let responses = [];
let iteration = 0;

const httpGet = (index) => {
    http.get(process.argv[2 + index], res => {
        res.pipe(bl((err, data) => {
            if (err) return console.error(err);

            responses[index] = data.toString();
            iteration++
            if (iteration === 3) {
                printRes();
            }
        }))
    })
}

const printRes = () => {
    for (let index in responses) {
        console.log(responses[index])
    }
}

for (let i = 0; i < 3; i ++) {
    httpGet(i);
}




/* Incorrect
http.get(url1, res => {
    res.pipe(bl((err, data) => {
        if (err) return console.error(err);

        data = data.toString();
        console.log(data);
    }))
})

http.get(url2, res => {
    res.pipe(bl((err, data) => {
        if (err) return console.error(err);

        data = data.toString();
        console.log(data);
    }))
})

http.get(url3, res => {
    res.pipe(bl((err, data) => {
        if (err) return console.error(err);

        data = data.toString();
        console.log(data);
    }))
})*/