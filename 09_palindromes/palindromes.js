const palindromes = function (string) {

    processedString = string.toLowerCase().replace(/[^a-z]/g, "");
    const splitString = processedString.split("");

    const reverseString = processedString.split("").reverse()

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
