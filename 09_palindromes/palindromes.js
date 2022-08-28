const palindromes = function (string) {
    let splitString = string.split("");

    let reverseString = splitString.reverse()
    
    if (reverseString === splitString) {
        return true
    } else {
        return false
    }


};

// Do not edit below this line
module.exports = palindromes;
