var lname = 'John';
// lname = 10
var newName = 'debraj';
console.log(newName.toUpperCase());
//boolean
var isValid = true;
console.log(isValid);
//array
var empList;
empList = ['sachin', 'saurav', 'dravid'];
var numList = [1, 2, 3, 4, 5];
var result = numList.filter(function (num) { return num > 2; });
console.log(result);
var sum = numList.reduce(function (acc, num) { return acc + num; });
console.log(sum);
var d = 3 /* Direction.South */;
console.log(d);
//tupple skipped because of less use case in angular
//any
var department;
department = 'it';
department = 11;
console.log(department);
