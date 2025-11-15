// Type Guard Using Instance Of

class Person {
  name:string;
  constructor(name:string){
    this.name = name;
  }
  getSleep(sleepHr: number){
    console.log(`${this.name}, Sleep Hr:${sleepHr}`);
  }

}

class Student extends Person{
  constructor(name:string){
    super(name);
  }
  doStudy(studyTime:number){
    console.log(`${this.name} , Do Study: ${studyTime} hr`);
  }
}
class Teacher extends Person{
  constructor(name:string){
    super(name);
  }
  takeClass(classTime:number){
    console.log(`${this.name} , Do Class: ${classTime} hr`);
  }
}

// function Guard
const isStudent = (user: Person) =>{
  return user instanceof Student;
}
const isTeacher = (user: Person) =>{
  return user instanceof Teacher;
}

// const getUserInfo = (user: Person) =>{
//   if(user instanceof Student){
//     user.doStudy(4);
//   }
//   else if(user instanceof Teacher){
//     user.takeClass(2.4);
//   }
//   else{
//     user.getSleep(5);
//   }
// }
const getUserInfo = (user: Person) =>{
  if(isStudent(user)){
    user.doStudy(4);
  }
  else if(isTeacher(user)){
    user.takeClass(2.4);
  }
  else{
    user.getSleep(5);
  }
}
const student1 = new Student('Soyab');
const teacher1 = new Teacher('Paltu Da');
const person1 = new Person('Human');

getUserInfo(teacher1);
getUserInfo(student1);
getUserInfo(person1);