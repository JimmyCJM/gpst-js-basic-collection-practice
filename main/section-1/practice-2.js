'use strict';

function includes(collection, ch) {
    return  collection.includes(ch);
}

module.exports = function collectSameElements(collectionA, collectionB) {
    let result = [];
    collectionA.forEach(item => {
        if (includes(collectionB[0], item)) {
            result.push(item);
        }
    });
    return result;
}