interface User{
    name:string;
    age?:number;
    id:number;
    email:string
}
let user:User = {
    name: 'sachin', id:1, email:''
}
interface Employees extends User{
    salary:number
}
let employee: Employees = {name: 'sachin', id:1, email:'',salary:56000};
console.log(employee)
export interface Login{
    login(): User;
}