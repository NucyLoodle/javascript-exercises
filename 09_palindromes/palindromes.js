const palindromes = function (string) {
    const splitString = string.split("");

    const reverseString = string.split("").reverse()

    console.log ("The first string is " + splitString)
    console.log ("The reversed string is " + reverseString)
    
    if (reverseString === splitString) {

        
        return true
    } else {
        return false
    }



};

// Do not edit below this line
module.exports = palindromes;
