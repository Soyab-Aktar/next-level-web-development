// Type Alias in TypeScript

type User = {
   id:number;
   name:{
    firstName: string;
    lastName: string;
   },
   gender: 'Male' | 'Female';
   contactNo: number;
   address:{
    division: string;
    city: string;
   } 
}
const user: User = {
  id: 143,
  name: {
    firstName: 'Soyab',
    lastName: 'Aktar'
  },
  gender: 'Male',
  contactNo: 912222222,
  address:{
    division: 'Suti',
    city: 'Aurangabad'
  }
};
console.log("User Data :",user);

// Function
type AddFunc = (num1:number, num2:number) => number;
const add: AddFunc = (num1, num2) => num1 +num2;