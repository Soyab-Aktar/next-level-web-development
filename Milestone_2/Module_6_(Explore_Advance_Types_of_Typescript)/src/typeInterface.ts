// Type Interface

// ==> interface will work with : object Type: Array, object, function

//Object
type User = {
  name: string;
  age: number;
};
interface IUser {
  name: string;
  age: number;
};
type Role = {
  role: 'admin' | 'user';
}
type userWithRole = User & Role;
interface IUserWithRole extends IUser{
  role: 'admin' | 'user';
}
const user1 : userWithRole = {
  name: "Soyab Aktar",
  age: 99,
  role: 'admin',
};
const user2 : IUserWithRole = {
  name: "EVO",
  age: 99,
  role: 'user',
};

//Array
type Friends = string[];
interface IFriends {
  [index: number] : string;
}
const friends: IFriends = ['A', 'B', 'C'];

//Function
type Add = (num1: number, num2: number) => number;
interface IAdd {
  (num1: number, num2:number) : number;
}
const add:IAdd = (num1,num2) => num1 + num2;