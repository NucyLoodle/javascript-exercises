const fibonacci = function(n) {
    const phi = ((Math.sqrt(5) + 1) / 2);

    const recipPhi = ((1 - Math.sqrt(5)) / 2);

    console.log(phi)
    console.log(recipPhi)

    return Math.round(((phi**n - (recipPhi)**n)/ Math.sqrt(5)))


};

// Do not edit below this line
module.exports = fibonacci;
