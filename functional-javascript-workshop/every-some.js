'use strict'

const checkUsersValid = goodUsers => {
    return submittedUsers => {
        return submittedUsers.every(sUser => {
            return goodUsers.some(gUser => {
                return gUser.id === sUser.id;
            })
        })
    }
}

module.exports = checkUsersValid;

/* Attempt 1:

const checkUsersValid = (goodUsers) => {
    return function allUsersValid(submittedUsers) {
        const goodIDS = goodUsers.map(user => user.id);
        return submittedUsers.every(submittedUser => {        
            return (goodIDS.some(goodID => goodID === submittedUser.id)) ? true : false;                
        })
    }
}

module.exports = checkUsersValid;

*/