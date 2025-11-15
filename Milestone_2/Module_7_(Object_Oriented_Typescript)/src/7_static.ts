// Static in TypeScript

class Counter{
  static count:number = 0;

  incement(){
    return (Counter.count = Counter.count + 1);
  }
  decrement(){
    return (Counter.count = Counter.count - 1);
  }
}

const instance1 = new Counter();
console.log(instance1.incement());
console.log(instance1.incement());
console.log(instance1.incement());
console.log(instance1.incement());

const instance2 = new Counter();
console.log(instance2.incement());

const instance3 = new Counter();
console.log(instance3.incement());
