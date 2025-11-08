// Queue Implementation with Linked List

class Node {
    constructor(value){
        this.value = value; 
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first =null;
        this.last = null;
        this.length = 0;
    }

    isempty(){
        return this.length === 0;
    }
    size(){
        return this.length;
    }

    enqueue(value){
        const newNode = new Node(value);
        if(this.isempty()){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length ++;

        return this;
    }

    dequwue(){
        if(this.isempty()){
            return undefined;
        }
        const nodeToRemove = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first=this.first.next;
        this.length--;
        return nodeToRemove.value;

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
            const removeditem = this.first;
            this.first = this.first.next;
            if(this.length === 1){
                this.last = null;
            }
            this.length --;
            return removeditem;
            
        }
        const leadingNode = this._traverserTheIndex(index -1);
        const holdingNode = leadingNode.next;
        leadingNode.next = holdingNode.next;

        if(leadingNode.next === null){
            this.last = leadingNode;
        }

        return holdingNode.value;
    }

    _traverserTheIndex(index){
    let currNode = this.first;
    let count =0;
    while(count != index){
        currNode = currNode.next;
        count++;
    }

    return currNode;
            
    }

    print(){
        const arr = [];
        let currNode = this.first;

        while(currNode != null){
            arr.push(currNode.value);
            currNode = currNode.next;
        }

        console.log(arr.join(" ==> "), " ==> null");
    }
}