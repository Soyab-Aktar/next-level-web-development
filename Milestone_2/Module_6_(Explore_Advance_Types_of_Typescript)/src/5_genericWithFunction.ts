// Generic Function

// ==> Array
// const createArrayWithString = (value: string) => [value];
// const createArrayWithNumber = (value: number) => [value];
// const createArrayWithUserObject = (value: {id:number; name:string}) => [value];
const createArrayWithGeneric = <T>(value:T) => {
  return [value];
}
const arrString = createArrayWithGeneric('Apple');
const arrNum = createArrayWithGeneric(342);
const arrObj = createArrayWithGeneric({
  id: 123,
  name: "Next Level",
});

// ==> Tuple
// const createArrayWithTuple = (param1:string, param2: string) => [ param1, param2];
const createArrayTupleWithGeneric =<X,Y> (param1:X, param2:Y) => [param1, param2];
const res1 = createArrayTupleWithGeneric(222,false);
const res2 = createArrayTupleWithGeneric(222,{id:3, name:"Soyab"});

const addStudentToCourse = <T>(studentInfo:T) =>{
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

console.log(addStudentToCourse(student2));