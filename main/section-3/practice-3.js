'use strict';
function find(collection, ch) {
    return  collection.filter(value => (value.key === ch))[0];
}

function summarize(collection) {
    let result = [];
    collection.forEach(item =>{
        let obj = find(result, item)
        if (obj) {
            obj.count++;
        } else {
            result.push({key: item, count: 1});
        }
    })
    return result;
}

function includes(collection, ch) {
    return collection.some(item => (item === ch));
}

function discount(collection, promotionItems) {
    return collection.filter(item =>{
        if (includes(promotionItems, item.key)) {
            item.count = item.count - Math.floor(item.count / 3);
        }
        return item;
    })
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let summarized = summarize(collectionA);
    return discount(summarized, objectB.value);
}
