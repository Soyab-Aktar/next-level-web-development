// Spread Operator
// ==> Array
const name = ["jett", "clove", "cypher"];
const name2 = ["moon knight", "Luna", "Jeff"];
name.push(...name2);
console.log(name);
// ==> Object
const user = {
  name:'Soyab',
  phoneNum: '2323123334',
}
const otherInfo = {
  course:"BCA",
  finalYear: 2027,
}
const userInfo = {...user, ...otherInfo};
console.log(userInfo);

// Rest Operator
const sentInvite = (...friends:string[]) => {
  friends.forEach((friend:string) => console.log(`Send invite to : ${friend}`));
}
sentInvite('Pintu','Chintu','BulBul');