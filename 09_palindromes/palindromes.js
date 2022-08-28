const palindromes = function (string) {
    let splitString = string.split("");
    let reverseString = splitString.reverse()
    let joinString = reverseString.join("")

    if (joinString === string) {
        return true
    } else {
        return false
    }


};

// Do not edit below this line
module.exports = palindromes;
