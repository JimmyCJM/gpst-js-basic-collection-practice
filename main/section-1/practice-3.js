'use strict';

function includes(collection, ch) {
    return  collection.includes(ch);
}

module.exports = function collectSameElements(collectionA, objectB) {
    let result = [];
    collectionA.forEach(item => {
        if (includes(objectB.value, item)) {
            result.push(item);
        }
    });
    return result;
}
