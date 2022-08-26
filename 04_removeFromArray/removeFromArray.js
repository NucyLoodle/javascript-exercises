const removeFromArray = function(array,value) {
    const index = array.indexOf(value)
    if (index > -1) {
        array.splice(index, 1);
    }
    return array


};
removeFromArray([1,2,3,4],3)

// Do not edit below this line
module.exports = removeFromArray;
