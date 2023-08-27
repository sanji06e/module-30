// default value, if value is not provided the thing acts as default
// you can give default value by using parameter = default;
console.log(8);
function add(num1=3, num2=0){
    let result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}
console.log(add());

// if one expect to have a string as parameter one can give empty string as default
function fullName(firstName, lastName = ''){
    const full = firstName + ' ' + lastName;
    return full;
}

// for array it's empty array
function friends(name = []){

}

// for object default can be empty object
function address(name = {}{

})