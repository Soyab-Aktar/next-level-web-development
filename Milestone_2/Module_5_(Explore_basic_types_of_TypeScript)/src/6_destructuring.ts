// Object Destructuring
const user = {
  id: 123,
  name: {
    firstName:"Soyab",
    lastName:"Aktar",
  },
  gender:"male",
  isMarried: false,
  course: "BCA"
}
const {gender, name:{firstName},name:{lastName}, isMarried} = user;
console.log(firstName);
console.log(lastName);
console.log(gender);
// Array Destructuring
const friends = ['karim','rahim','mahim'];

// const myBestFriend = friends[1];
// console.log(myBestFriend);

const [karim, ,mahim] = friends;
console.log(karim);
console.log(mahim);
