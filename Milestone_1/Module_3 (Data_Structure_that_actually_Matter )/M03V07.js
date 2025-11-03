// linked List implimentation - Append() and Print()

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head =null;
        this.tail = null;
        this.length = 0;
    }

    append(value){
        const newNode = new Node(value);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length ++;
    }

    prepend(){

    }

    insert(){

    }

    remove(){

    }

    print(){
        const arr = [];
        let currNode = this.head;

        while(currNode != null){
            arr.push(currNode.value);
            currNode = currNode.next;
        }

        console.log(arr.join(" ==> "), " ==> null");
    }
}

const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);

linkedList.print();
