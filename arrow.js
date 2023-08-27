// function declearation
function add(num1, num2){
    let result = num1 + num2; 
    return result;
}
console.log(add(3, 2));

// function expression
// its works by declearing variable without giving any function name
// its also known as anonymous function
const add2 = function(a, b){
    return a + b;
}

// arrow function
// first declear variable
// second give the parameter after the equal sign
// third mention arrow sign =>
// fourth do the operation
// no return needed
// its a ES6 function
const add3 = (a, b) => a + b;
console.log(add3(3, 3));

const substract = (a, b) => a-b;
console.log(substract(9, 3));

