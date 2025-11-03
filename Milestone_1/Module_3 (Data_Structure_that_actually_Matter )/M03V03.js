// Stack implimentation using Array

// LIFO ==> Last In First Out
class Stack {
    constructor (){
        this.items = [];
    }
    //Push
    push(value){
        this.items.push(value);
    }
    //isEmpty
    isEmpty(){
        return this.items.length === 0;
    }
    //Pop
    pop(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items.pop();
    }
    //Peek
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.items.length -1];
    }
    //Print
    print(){
        console.log(this.items.slice().reverse().join(" ==> "));
    }
}

const stack1 = new Stack();
console.log(stack1.peek());
console.log(stack1.isEmpty());

stack1.push(11);
stack1.push(22);
stack1.push(33);

stack1.print();
console.log(stack1.peek());

console.log(stack1.pop());
stack1.print();
console.log(stack1.peek());
