const reverseString = function(string) {
    let stringArray = string.split("");
    return stringArray.reverse().join("");
};

reverseString("123! abc");
// Do not edit below this line
module.exports = reverseString;
