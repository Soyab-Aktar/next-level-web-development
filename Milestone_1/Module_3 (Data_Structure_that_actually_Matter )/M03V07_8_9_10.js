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

        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;

        return this;

    }

    insert(index,value){
        if(index<0 || index > this.length){
            console.log("Index Out of bound");
            return undefined;
        }
        if(index === 0){
          return this.prepend(value);
        }
        if(index === this.length){
            return this.append(value);
        }
        const leadingNode = this._traverserTheIndex(index -1);
        const holdingNode =leadingNode.next;
        const newNode = new Node(value);
        leadingNode.next = newNode;
        newNode.next = holdingNode;
        this.length++;
    }

    remove(index){
        if(index === 0){
            const removeditem = this.head;
            this.head = this.head.next;
            if(this.length === 1){
                this.tail = null;
            }
            this.length --;
            return removeditem;
            
        }
        const leadingNode = this._traverserTheIndex(index -1);
        const holdingNode = leadingNode.next;
        leadingNode.next = holdingNode.next;

        if(leadingNode.next === null){
            this.tail = leadingNode;
        }

        return holdingNode.value;
    }

    _traverserTheIndex(index){
    let currNode = this.head;
    let count =0;
    while(count != index){
        currNode = currNode.next;
        count++;
    }

    return currNode;
            
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
// linkedList.append(10);
// linkedList.append(20);
// linkedList.append(30);

// linkedList.prepend(33);
// linkedList.prepend(44);
// linkedList.prepend(55);

linkedList.append(0).append(1).append(2).append(4);


// linkedList.print();

linkedList.insert(3,3);

linkedList.print();

linkedList.remove(0);
linkedList.print();
