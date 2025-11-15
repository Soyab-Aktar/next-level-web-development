// Type Guard Using Typeof And In

//typeof
type Alphanumeric = number | string ;
const add = (num1:Alphanumeric, num2:Alphanumeric) => {
  // add(2,4);
  if(typeof num1 === "number" && typeof num2 === "number"){
    return num1+num2;
  }
  // add(2,'4') | add('3',5);
  else{
    return num1.toString() + num2.toString();
  }
}

// in
type NormalUser = {
  name:string;
}
type AdminUser = {
  name:string;
  role: "Admin";
}
const getUserInfo = (user: NormalUser|AdminUser) =>{
  if("role" in user){
    console.log(`This ${user.name} and his role is ${user.role}`);
  }
  else{
    console.log(`This ${user.name} and his role is Normal`);
  }
}
getUserInfo({name:"Soyab",role:"Admin"})