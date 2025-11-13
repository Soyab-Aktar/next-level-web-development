// Function
// Arow Function, Normal Function

// Define each parameter with number
function add(num1:number,num2:number){
  return num1 + num2;
}
const addResult = (num1:number, num2:number) => {
  return num1 + num2;
}
// add(2,'2'); ==> Show error

// Define each parameter with number + output
function multiply(num1:number,num2:number):number{
  return num1 * num2;
}
const multiplyResult = (num1:number,num2:number):number =>{
  return num1 * num2;
}

// object ==> function ==> method
const poorUser = {
  name: "Soyab",
  balance: 0,
  addBalance(value: number){
    const totalBalance =  this.balance + value;
    this.balance = totalBalance;
    return totalBalance;
  },
};
poorUser.addBalance(50);
poorUser.addBalance(40);
console.log(poorUser.balance);

// Call back funtion
const arr: number[] = [1,2,3];
const sqrArray = arr.map((element: number):number => element * element )
console.log(sqrArray);