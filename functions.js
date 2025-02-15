"use strict";
//named function
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3));
//arrow function
const sub = (num1, num2) => num1 - num2;
console.log(sub(2, 3));
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(2, 3));
//optional paramater
function addition(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(addition(2, 3));
console.log(addition(2, 3, 4));
//required parameter
const substraction = (num1, num2, num3 = 12) => num1 - num2 - num3;
console.log(substraction(2, 3));
console.log(substraction(2, 3, 4));
