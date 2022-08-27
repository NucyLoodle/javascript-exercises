const ftoc = function(fahrenheit) {
  let celsius = ((fahrenheit - 32)* (5/9))
  let roundedCelsius = Math.round(celsius * 10)/10
  return roundedCelsius

};

const ctof = function() {

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
