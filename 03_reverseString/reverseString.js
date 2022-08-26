const reverseString = function(string) {
    let stringArray = string.split("");
    return stringArray.reverse().join("");

};

reverseString("hello");
// Do not edit below this line
module.exports = reverseString;
