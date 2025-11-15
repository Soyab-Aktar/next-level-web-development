// Inheritance , 1st piller of OOP

class Person {
  name: string;
  age: number;
  address: string;
  constructor(name:string, age:number, address:string){
    this.name = name;
    this.age = age;
    this.address = address;
  }
  
  getSleep(sleepTime:number){
    console.log(`${this.name} , Sleep Time is: ${sleepTime} Hr`);
  }

}

class Student extends Person {};
class Teacher extends Person {
  designation: string;
  constructor(name:string, age:number, address:string,designation:string){
    super(name,age,address);
    this.designation = designation;
  }
  takeClass(classTime:number){
    console.log(`${this.name}, Class Time:${classTime} Hr`)
  }
};

const student1 =  new Student('Soyab',21,'India,WestBengal');
const teacher1 = new Teacher('Pinku Kumar', 39, 'India,West Bengal','Senior principal');

student1.getSleep(5);
teacher1.takeClass(2);