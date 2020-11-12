//creating a Stack using a Linked List
//Stacks are good for fast inserts, fast removes and quick peeks (Although with limited access). They are also ordered.
//Not ideal for searches

//create Node class 
class Node{
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  //create Stack class
  class Stack{
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }

    //checks top item on stack
    peek(){
      return this.top;
    }

    //add new item to be the top item
    push(value){
    const newNode = new Node(value);

    if(this.top === null){
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
  
    this.length++;
    return this;
    }
  
    //remove top item
    pop(){
      if(!this.top){
        return null;
      }
  
      const popNode = this.top.value;
  
      if(this.top === this.bottom){
        this.top = null;
        this.bottom = null;
      } else {
        this.top = this.top.next;
      }
  
      this.length--;
      return popNode;
    }
    
    //check if stack is empty
    isEmpty(){
      if (!this.top){
        return true;
      }
  
      return false;
    }
  
  }
  
  let myStack = new Stack();
  
  myStack.peek();
  myStack.isEmpty();
  myStack.push('Google');
  myStack.push('youtube');
  myStack.push('twitter');
  myStack.peek();
  myStack.isEmpty();
  myStack.pop();
  myStack.pop();
  myStack.pop();
  myStack.peek();
  myStack.isEmpty();