const palindromes = function (string) {

    processedString = string.toLowerCase().replace(/[^a-z]/g, "");
    const splitString = processedString.split("").join();

    const reverseString = processedString.split("").reverse().join()

    if (reverseString === splitString) {

        
        return true
    } else {
        return false
    }



};

// Do not edit below this line
module.exports = palindromes;
