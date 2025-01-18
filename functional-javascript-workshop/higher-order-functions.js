const repeat = (fn, num) => {
    for (let i = 0; i < num; i++) {
        fn();
    }
}

module.exports = repeat;