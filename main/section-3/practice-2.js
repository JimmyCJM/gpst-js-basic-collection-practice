'use strict';

function includes(collection, ch) {
    return  collection.includes(ch);
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    return collectionA.map(item =>{
        if (includes(objectB.value, item.key)) {
            item.count = item.count - Math.floor(item.count / 3);
        }
        return item;
    })
}
