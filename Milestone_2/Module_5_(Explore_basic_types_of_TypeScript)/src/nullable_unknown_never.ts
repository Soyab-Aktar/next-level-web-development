// Nullable type
const getUser = (input:string | null) => {
   if(input){
    console.log(`From DB: ${input}`);
   }
   else{
    console.log(`From DB: All User`);
   }
}
getUser(null);
getUser('Soyab');

// Unknown type
const discountCalculator = (input: unknown) => {
  if(typeof input === 'number'){
    const discountedPrice = input * 0.1;
    console.log(discountedPrice);
  }
  else if(typeof input === 'string'){
    const [discountedPrice] = input.split(" ");
    console.log(Number(discountedPrice) *0.1);
  }
  else{
    console.log("Wrong input");
  }
}

// Never Type
const throwErr = (msg:string) => {
  throw new Error(msg);
}
throwErr("It will never return any output , except error");