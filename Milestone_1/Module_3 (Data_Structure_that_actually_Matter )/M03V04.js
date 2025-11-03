// Queue implimentation using Array

// FIFO = First In First Out

class Queue {
    constructor (){
        this.items = [];
    }
    //Push
    enqueue(value){
        this.items.push(value);
    }
    //isEmpty
    isEmpty(){
        return this.items.length === 0;
    }
    //Pop
    dequeue(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items.shift();
    }
    //Peek
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[0];
    }
    //Print
    print(){
        console.log("Start ==>",this.items.join(" ==> "),"==> End");
    }
}

const queue1 = new Queue();
queue1.enqueue(10);
queue1.enqueue(20);
queue1.enqueue(30);
queue1.enqueue(40);
queue1.enqueue(50);

queue1.print();
console.log("Peek : ",queue1.peek());
queue1.print();
queue1.dequeue();
queue1.print();

