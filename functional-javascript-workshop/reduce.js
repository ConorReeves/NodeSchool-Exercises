'use strict'

const countWords = (arr) => {
    return arr.reduce((myObj, word) => {
        (myObj[word] === undefined) ? myObj[word] = 0 : false;
        myObj[word] = myObj[word] + 1;
        return myObj;
    }, {})
}

module.exports = countWords; 


/* Attempt 1:

const countWords = (arr) => {
    let myObj = {};
    let uniqueWords = [];

    arr.map(word => !(uniqueWords.includes(word)) ? uniqueWords.push(word) : false)

    uniqueWords.map(cWord => {
        arr.reduce((p, c) => {
            (myObj[cWord] === undefined) ? myObj[cWord] = 0 : false;
            (cWord === c) ? (myObj[cWord] += 1) : false;
        }, arr[0])
    })


    return myObj;
}

module.exports = countWords; 

*/