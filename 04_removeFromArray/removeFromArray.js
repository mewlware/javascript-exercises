const removeFromArray = function(array, ...itemsToRemove) {
    let newArray = []

    for (let item of array) {
        let isItemRemoved = 0;
        for (let itemToRemove of itemsToRemove) {
            if (item === itemToRemove) {
                isItemRemoved = 1;
                break;
            }
        }
        if (!isItemRemoved){
            newArray.push(item);
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
