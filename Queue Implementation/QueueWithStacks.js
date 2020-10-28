//Implementing a Queue using two Stacks
//Here peek, enqueue will have an O(1) while dequeue will have an O(n) because of 2 seperate loops

//create Queue class
class QueueOfStacks{
  constructor(){
    this.first = [];
    this.backwards = [];
  }

  //get element that is to be dequeued next
  peek(){
    return this.first[0];
  }

  //add item to back of the queue
  enqueue(value){
    this.first.push(value);

    return this.first;
  }

  //remove item from front of the queue
  dequeue(){
    let len = this.first.length;
    for(let i=0; i<len; i++){
      this.backwards.push(this.first.pop());
    }

    let removeItem = this.backwards.pop();

    len = this.backwards.length;
    for(let i=0; i<len; i++){
      this.first.push(this.backwards.pop());
    }

    return removeItem;
  }
}

let myQueue = new QueueOfStacks();
myQueue.peek();
myQueue.enqueue('github');
myQueue.enqueue('microsoft');
myQueue.enqueue('apple');
myQueue.enqueue('instagram');
myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.peek();