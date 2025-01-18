'use strict'

const getShortMessages = (messages) => {
    return messages.map(item => item.message).filter(myMessage => myMessage.length < 50)
}

module.exports = getShortMessages;

/*

Attempt 1:

const getShortMessages = (messages) => {
    let obj = messages;
    let arr = Object.keys(obj)
                    .map((key) => obj[key].message)
                    .filter((item) => item.length < 50)

    return arr;
}

module.exports = getShortMessages;

*/