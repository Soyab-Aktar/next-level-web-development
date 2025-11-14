// key of constraints

// keyof : type operator

type RichPeopleVehicle = {
  car: string;
  bike: string;
  cng: string;
};
type MyVehicle1 = "bike" | "car" | "cng";
type MyVehicle2 = keyof RichPeopleVehicle;
const MyVehicle: MyVehicle2 = "bike";
// const MyVehicle: MyVehicle2 = "ship"; ==> will show error

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
}
const user: User = {
  id: 222,
  name: "Soyab",
  address: {
    city: "ctg",
  }
};
// const myId = user.id;
const myId = user["id"];
const myName = user["name"];
const myAddress = user["address"];
// console.log({myId, myName, myAddress});

// const getPropertyFromObj = (obj: User, key: keyof User) =>{
//   return obj[key];
// }
const getPropertyFromObj = <X>(obj: X, key:keyof X) =>{
  return obj[key];
}
console.log(getPropertyFromObj(user,"name"));

