//creating a Queue using a Linked List
//Queues are good for fast inserts, fast removes and quick peeks (Although with limited access). They are also ordered.
//Not ideal for searches

//create Node class
class Node{
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  //create Queue class
  class Queue{
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }

    //returns the item thats gonna be dequeued. Time Complexity = O(1)
    peek(){
      return this.first;
    }

    //adds item to the last spot. Time Complexity = O(1)
    enqueue(value){
    const newNode = new Node(value);

    if(this.first === null){
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
  
    this.length++;
    return this;
    }
  
    //removes item from first spot. Time Complexity = O(1)
    dequeue(){
      if(!this.first){
        return null;
      }
  
      const popNode = this.first.value;
  
      if(this.first === this.last){
        this.first = null;
        this.last = null;
      } else {
        this.first = this.first.next;
      }
  
      this.length--;
      return popNode;
    }
  
    //checks if queue is empty. Time Complexity = O(1)
    isEmpty(){
      if (!this.first){
        return true;
      }
  
      return false;
    }
  
  }
  
  let myQueue = new Queue();
  
  myQueue.peek();
  myQueue.isEmpty();
  myQueue.enqueue('Google');
  myQueue.enqueue('youtube');
  myQueue.enqueue('twitter');
  myQueue.peek();
  myQueue.isEmpty();
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.peek();
  myQueue.isEmpty();
