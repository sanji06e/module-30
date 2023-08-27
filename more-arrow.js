const difference = (x, y) => x + y;
const multiply = (a, b, c) => a*b*c;
// using arrow to get value of a key in object
const getAge = (person) => person.name;
const friend1 = {
    name : 'sanjida',
    age : 22,
    village : 'manikpur'
}
console.log(getAge(friend1));
// using array function to get third element of an array
// one parameter doesn't need any first bracket
const getArrayThird = array => array[2];
console.log(getArrayThird([2, 3, 4, 5, 6]));

// another example of single parameter
const double = num => num * 2;
console.log(double(4));

// no parameter
const getPI = () => Math.PI
console.log(getPI());

// large arrow function
// second bracket requires return
// its called explicit return
// the small function with no second bracket gives implicit return;
const doMath = (x, y, z) => {
    if (x > y && x > z){
        return x
    }
    else if (y > x && y > z){
        return y
    }return z
}
console.log(`the largest number is ${doMath(3, 8, 2)}`);

// difference between arrow function and regular function
// ask chatgpt and take note