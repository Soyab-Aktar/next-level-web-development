// Basic Class Constructor And Methods Refresher

class Counter {
    constructor(count){
        this.count = count; 
    }

    add(amount){
        this.count = this.count + amount;
    }

    print(){
        console.log(this.count);
    }
}

const counter1 = new Counter(0);
counter1.print();

counter1.add(4);
counter1.print();

counter1.add(6);
counter1.print();