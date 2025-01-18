'use strict'

let reduce = (arr, fn, initial) => {

    var result = {};
    if (!arr.length) return result;


    if (fn === undefined) {
        const fn = (save, current, index, myArr) => {
            if (!save) save = initial;
            if (!myArr) myArr = arr;
            if (!index) index = 0;
            if (!current) current = arr[0];

            //(save[current] === undefined) ? save[current] = 0 : false;
            (save[current].hasOwnProperty(current)) ? save[current] = save[current] + 1 : save[current] = 0;
            result = save;

            return reduce(myArr, fn(), save)
        }
    }    
  }

module.exports = reduce;