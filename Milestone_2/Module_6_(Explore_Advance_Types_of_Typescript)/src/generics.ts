// Generics

type GenericArray<T> = Array<T>;

// ==> Array
// const friends : string[] = [ 'a', 'b', 'c', 'd', 'e'];
const friends : GenericArray<string> = [ 'a', 'b', 'c', 'd', 'e'];

// const rollNumber:number[] = [4,3,7,1,3];
const rollNumber:GenericArray<number> = [4,3,7,1,3];

// const isEligible:boolean[] = [true, false, false, true];
const isEligible:GenericArray<boolean> = [true, false, false, true];

// ==> Tupple
type Coordinates<X,Y> = [X,Y];
// const coordinates: Coordinates = [20,22];
const coordinates1: Coordinates<number,number> = [20,22];
// const coordinates: Coordinates = ['20','33'];
const coordinates2: Coordinates<string,string> = ['20','33'];

// ==> Object
const userList: GenericArray<object> = [
  {
    name:"Soyab",
    age: 34
  },
  {
    name: "Evo",
    age: 54
  }
]
