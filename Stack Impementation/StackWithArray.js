//creating a Stack using a Linked List
//Stacks are good for fast inserts, fast removes and quick peeks (Although with limited access). They are also ordered.
//Cant use for searches

//create Stack class
class Stack{
    constructor(){
      this.array = [];
    }

    //checks top item on stack
    peek(){
      if (!this.array[0]){
      return null;
    }
      return this.array[this.array.length-1];
    }

    //add new item to be the top item
    push(value){
    this.array.push(value);
    return this;
    }
  
    //remove top item
    pop(){
      this.array.pop()
      return this
    }
  
    //check if stack is empty
    isEmpty(){
      if (!this.array[0]){
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