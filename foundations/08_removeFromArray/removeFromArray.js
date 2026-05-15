const removeFromArray = function(arr, ...rmv) {
    for (let i = 0; i < rmv.length; i++) {
        if (arr.includes(rmv[i])) {
            arr.splice(arr.indexOf(rmv[i]), 1);
            if (arr.includes(rmv[i])) {
            i--;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
