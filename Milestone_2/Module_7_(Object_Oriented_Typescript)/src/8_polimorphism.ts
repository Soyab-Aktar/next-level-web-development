// Polymorphism, the 2nd pillar of OOP

class Person{
  getSleep(){
    console.log(`I sleep for 8 hours, I am a Normal Person`);
  }
}

class Student extends Person{
  getSleep(){
    console.log(`I am a Student , slepp for 5 hours`);
  }
}

class Devloper extends Person{
  getSleep(){
    console.log(`I am a devlopers , slepp for 3 hours`);
  }
}

const person1 = new Person();
const person2 = new Student();
const person3 = new Devloper();

const getSleepingTime = (params: Person) =>{
  params.getSleep();
}

getSleepingTime(person1);
getSleepingTime(person2);
getSleepingTime(person3);

class Shape{
  getArea(){
    return 0;
  }
}
class Circle extends Shape{
  radius:number;
  constructor(radius:number){
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI*this.radius;
  }
}
class Rectangle extends Shape{
  height:number;
  width:number;
  constructor(height:number,width:number){
    super();
    this.height = height;
    this.width = width;
  }
  getArea(): number {
    return this.height*this.width;
  }
}

const getArea = (param:Shape) =>{
  console.log(param.getArea());
}
const shape1 = new Shape();
const shape2 = new Circle(10);
const shape3 = new Rectangle(44,2);

getArea(shape1);
getArea(shape3);
getArea(shape2);