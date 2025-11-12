// Constraint in Typescript
// ==> strict rules impliment like

type Student = {
  id: number;
  name: string;
  dateOfBirth:string;
  class: string; 
}

const addStudentToCourse = <T extends Student>(studentInfo:T) =>{
  return {
    course: "Next Level",
    ...studentInfo,
  }
}

const student1 = {
  id: 34,
  name: "soyab",
  hasPen: true,
};
const student2 = {
  id: 45,
  name: "Chirag",
  hasCar: true,
  isMarried: true,
};
const student3 = {
  hasWatch: true,
};

// const resultInfo = addStudentToCourse(student3);
