// class Employee{
//     id!:number;
//     name!: string;
//     address! : string;    
// }

// let sachin = new Employee();
// sachin.id = 1;
// sachin.name = "Sachin";
// sachin.address = "Mumbai";
// console.log(sachin);

class Employee1{
    id:number;
    name: string;
    address: string;
    constructor(id:number,name:string, address:string){
        this.id = id;
        this.name = name;
        this.address = address
    }    

    getNameWithAddress():string{
        return `${this.name} stays at ${this.address}`;
    }
}

let sachin1 = new Employee1(1,"Sachin", "Mumbai");
console.log(sachin1);
console.log(sachin1.getNameWithAddress());

//access modifier
class Employee2{
    id:number;
    private name: string;
    protected address: string;
    constructor(id:number,name:string, address:string){
        this.id = id;
        this.name = name;
        this.address = address
    }    

    getNameWithAddress():string{
        return `${this.name} stays at ${this.address}`;
    }
    //static member
    static getEmployeeCount(){
        return 50;
    }

    //getters and setters
    get empId(){
        return this.id
    }
    set empId(id:number){
        this.id = id;
    }
}


let headCount = Employee2.getEmployeeCount();
console.log(headCount);

let sachin2 = new Employee2(1,"Sachin", "Mumbai");
sachin2.empId = 34;
console.log(sachin2.empId);
class Manager extends Employee2{
    constructor(id:number, name:string, address:string){
        super(id,name,address);
    }

    getNameWithAddress(): string {
        return`Manager with id ${this.id} stays at ${this.address}`;
    }
}
let rahul = new Manager(1,"Rahul", "Mumbai");
let address = rahul.getNameWithAddress();
console.log(address)

