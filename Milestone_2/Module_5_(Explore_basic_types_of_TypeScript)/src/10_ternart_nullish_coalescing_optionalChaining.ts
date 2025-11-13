// Ternary Operator ==> '?'
const userAge = 21;
const jobAge = (age:number) => {  
  // if(age >= 21){
    //   console.log("You are Eligible");
    // }
    // else{
      //   console.log("You are not Eligible !");
      // }
      const result = age >= 21 ? 'You are Eligible':'You are not Eligible !';
      
      return result;
  }
  console.log(jobAge(20));
  console.log(jobAge(23));
  
// Nullish Coalescing Operator==> '??' its for null || undefined
const userTheme = undefined;
const selectedTheme =  userTheme ?? "Light Theme";
console.log(selectedTheme);

// Optional Chaining ==> '?.'
const collegeAddress : {
  address: {
    city: string;
    dist: string;
    postalCode ?: number;
  }
} = {
  address: {
    city: "Malda Town",
    dist: "Malda",
  }
};
const postalCode = collegeAddress?.address?.postalCode;
console.log(postalCode);