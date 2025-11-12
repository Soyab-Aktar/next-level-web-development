// Generic With Interface

interface Devloper<T,X=null >{
  name:string;
  salary:number;
  device:{
    brand:string;
    model:string;
    releasedYear:string;
  };
  smartWatch: T;
  bike?:X;
}

interface AsusWatch {
    heartRate:string;
  stopwatch: boolean;
}
interface BikeModel{
  brand: "Yamaha",
  engineCapacity: '200cc',
}

const poorDevloper: Devloper<AsusWatch,BikeModel> = {
  name: 'Mr Soyab',
  salary: 20,
  device: {
    brand: "Asus",
    model: "Rog Strix",
    releasedYear: '2011',
  },
  smartWatch:{
    heartRate: '122',
    stopwatch: true,
  }
}

interface AppleWatch {
  heartRate:string;
  call: boolean;
  calculator: boolean;
  Ai: boolean;
}
const richDevloper: Devloper<AppleWatch> = {
  name: 'Mr Evo',
  salary: 22,
  device: {
    brand: "Apple",
    model: "mac",
    releasedYear: '2022',
  },
  smartWatch:{
    heartRate: '122',
    calculator: true,
    call: true,
    Ai: true,
  },
  bike: null,
}