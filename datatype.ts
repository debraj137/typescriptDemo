let lname = 'John';
// lname = 10
let newName:string= 'debraj';
console.log(newName.toUpperCase());
//boolean
let isValid:boolean = true;
console.log(isValid);
//array
let empList: string[];
empList = ['sachin','saurav','dravid'];
let numList: Array<number>=[1,2,3,4,5]
let result = numList.filter((num)=>num>2)
console.log(result);
let sum = numList.reduce((acc,num)=>acc + num);
console.log(sum);
//enum
const enum Direction{
    North, East, West, South
}
let d:Direction = Direction.South;
console.log(d);
//tupple skipped because of less use case in angular
//any
let department:any;
department = 'it';
department = 11;
console.log(department);

