'use strict';

function includes(collection, ch) {
    return  collection.includes(ch);
}

module.exports = function collectSameElements(collectionA, collectionB) {
    let result = [];
    collectionA.forEach(value =>{
        if (includes(collectionB, value)) {
            result.push(value);
        }
    });
    return result;
}
