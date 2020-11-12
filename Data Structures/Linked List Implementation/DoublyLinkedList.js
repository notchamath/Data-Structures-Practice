//Creating a Doubly Linked List from scratch
//Linked Lists overall are good for organized data storing(ordered) and can store a flexible amount of data
//Doubly Linked Lists are better for searches since they can traverse both ways, and are overall safer than singly LLs
//Linked lists overall are not ideal for searches(slow lookups) and requires more memory

//creating each node in a class to keep the code DRY
class Node{
    constructor(value){
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  
  //establishing the doubly linked list
  class DoublyLinkedList{

    //constructor
    constructor(value){
      this.head = new Node(value);
      this.tail = this.head;
      this.length = 1;
    }
  
    //print all values stored in the linked list
    printValues(){
      const array = [];
      let currNode = this.head;
  
      while(currNode !== null){
        array.push(currNode.value);
        currNode = currNode.next;
      }
  
      return array;
    }
  
    //should be a private method, not for user
    _traverseToIndex(index){
   
      let counter = 0;
      let currNode = this.head;
  
      while(counter !== index){
        currNode = currNode.next;
        counter++;
      }
  
      return currNode;
    }

    //add a node to the tail    
    append(value){
      const newNode = new Node(value);
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length++;
  
      return this.printValues();
    }

    //add a node to head
    prepend(value){
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
  
      return this.printValues();
    }
  
    //add a node at a specified index
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
  
    //delete node with the specified index
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
  