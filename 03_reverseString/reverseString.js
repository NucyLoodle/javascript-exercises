const reverseString = function(string) {
    let stringArray = string.split("");
    return stringArray.reverse().join("");
};

reverseString("hello there");
// Do not edit below this line
module.exports = reverseString;
