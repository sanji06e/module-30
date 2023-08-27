const max = Math.max(3, 6, 8, 6);
console.log(max);
const numbers = [2, 6, 7, 8];
const maxArray = Math.max(numbers);
// Math.max only can take number as we provided array it can't return result
console.log(maxArray);
// by adding three dots before an array we can get only the elements of the array
const maxArray2 = Math.max(...numbers);
console.log(...numbers)
console.log(maxArray2);

// works for string too
const friends = ['emam', 'soni', 'priya', 'bina'];
console.log(...friends)
// premitive values like number, string, boolean creates new memory for following secondNUm in pc, thats why the following secondNum didnot change when firstName was changed
let firstNum = 3;
let secondNUm = firstNum;
firstNum = 5;
console.log(firstNum);
console.log(secondNUm);

// non-premitive values like object, array keeps the same memory in pc, thats why the following nums2 also changed when num1 was changed, there nums2 keep reference of num1 and later refers the user to num1 when its value is sought
const num1 = [2, 4, 5, 7];
const nums2 = num1;
nums2.push(3);
console.log(num1);
console.log(nums2);

//to avoid that in non-premitive object use spread operator;
const number1 = [3, 5, 6, 7];
const number2 = number1;
const dostw = [...number2];
number1.push(9);
console.log(number1);
console.log(dostw); //here the push is not effecting dostw variable
