const add = function(num1, num2) {
   return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
	  let arraySum = 0
    for (let i =0; i < array.length; i++) {
      arraySum += array[i];
    }
  return arraySum;
};

const multiply = function(array) {
  let arrayProduct = 1
  for (let i = 0; i < array.length; i++) {
    arrayProduct *= array[i];
  }
return arrayProduct;

};

const power = function(num1, num2) {
  return num1**num2;
};

const factorial = function(num) {
  let factorial = 1;
    for (let i = 1; i <= num; i++) {
    factorial *= i ;
  }
  return factorial;  
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
