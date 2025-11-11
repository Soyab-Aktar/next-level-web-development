// Type Assertion

const kgToGMConverter = (input: string | number ): number | string | undefined => {
  if(typeof input === "number"){
    return input *1000;
  }
  else if(typeof input === "string"){
    const [value] = input.split(" ");
    return `Converted output is: ${Number(value)}`;
  }
};
const result1 = kgToGMConverter(66) as number;
const result2 = kgToGMConverter("122 kg") as string;
console.log(result1);
console.log(result2);

