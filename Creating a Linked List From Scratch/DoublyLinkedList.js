class Node{
    constructor(value){
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  
  class DoublyLinkedList{
    constructor(value){
      this.head = new Node(value);
      this.tail = this.head;
      this.length = 1;
    }
  
    printValues(){
      const array = [];
      let currNode = this.head;
  
      while(currNode !== null){
        array.push(currNode.value);
        currNode = currNode.next;
      }
  
      return array;
    }
  
    _traverseToIndex(index){
   
      let counter = 0;
      let currNode = this.head;
  
      while(counter !== index){
        currNode = currNode.next;
        counter++;
      }
  
      return currNode;
    }
  
    append(value){
      const newNode = new Node(value);
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length++;
  
      return this.printValues();
    }
  
    prepend(value){
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
  
      return this.printValues();
    }
  
    insert(index, value){
  
      if(index >= this.length) {
        return this.append(value);
      }
      if(index === 0) {
        return this.prepend(value);
      }
  
      const newNode = new Node(value);
      const leadNode = this._traverseToIndex(index-1);
      const followNode = leadNode.next;

      newNode.next = followNode;
      newNode.prev = leadNode;
      followNode.prev = newNode;
      leadNode.next = newNode;
      this.length++;
  
      return this.printValues();
    }
  
    remove(index){
      //JS has garbage collection built in, therefore:
      
      if(index >= this.length) {
        return "Error: Invalid index";
      }
      if(index === 0) {
        this.head = this.head.next;
        return this.printValues();
      }
  
      const leadNode = this._traverseToIndex(index-1);
      const deleteNode = leadNode.next;
      const followNode = deleteNode.next;
      
      leadNode.next = followNode;
      followNode.prev = leadNode;
      
      this.length--;
  
      return this.printValues();
    }
  }
  
  let newLinkedList = new DoublyLinkedList(2);
  newLinkedList.append(4);
  newLinkedList.prepend(0);
  newLinkedList.append(100);
  newLinkedList.prepend(99);
  newLinkedList.insert(100,1);
  newLinkedList.remove(0,1);
  