// Class and Object

// class Animal {
//   public name:string;
//   public species:string;
//   public sound:string;
//   constructor(name:string, species:string, sound:string){
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }
//   makeSound(){
//     console.log(`${this.sound} is making sound`);
//   }
// };
class Animal {

  constructor(public name:string, public species:string, public sound:string){

  }
  makeSound(){
    console.log(`${this.sound} is making sound`);
  }
};

const dog = new Animal('Dogesh','Dog','Bark');
console.log(dog);
dog.makeSound();
const cat = new Animal('MeowMasi','Cat','Meow Meow');
console.log(cat);
cat.makeSound();