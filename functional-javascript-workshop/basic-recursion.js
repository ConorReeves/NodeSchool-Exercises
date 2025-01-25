'use strict'


function reduce(arr, fn, initial) {
    function recurse(index, obj) {
        if (index > arr.length-1) return obj;
        return recurse(index + 1, fn(obj, arr[index]))
    }

    return recurse(0, initial)
}
  
module.exports = reduce;








/*
let reduce = (arr, fn, initial) => {

    if (!result) var result = {};
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
        }
    }    
    return reduce(result, fn(), save)
  }

module.exports = reduce;
*/