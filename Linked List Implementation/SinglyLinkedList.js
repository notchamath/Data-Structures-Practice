//Creating a Singly Linked List from scratch
//Linked Lists overall are good for organized data storing(ordered) and can store a flexible amount of data
//Singly Linked Lists are faster and takes up less space compared to doubly-LLs 
//Linked lists overall are not ideal for searches(slow lookups) and requires more memory

//creating each node in a class to keep the code DRY
class Node{
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  //establishing the singly linked list
  class LinkedList{

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
      this.tail = newNode;
      this.length++;
  
      return this.printValues();
    }
    
    //add a node to the head
    prepend(value){
      const newNode = new Node(value);
      newNode.next = this.head;
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
  
      newNode.next = leadNode.next;
      leadNode.next = newNode;
      this.length++;
  
      return this.printValues();
    }
  
    // delete node with the specified index
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
      
      
      leadNode.next = deleteNode.next;
  
      this.length--;
  
      return this.printValues();
    }

    //reverse the whole linked list
    reverseLinkedList(){

      //if head is the only node in the list, return head
      if(!this.head.next){
        return this.head;
      }
  
      let first = this.head;
      let second = first.next;
      this.tail = this.head;
    
      while(second){
        let temp = second.next;
        second.next = first;
        first = second;
        second = temp;
      }
    
      this.head.next = null;
      this.head = first;
    
      return this.printValues();
    }
  }
  
  let newLinkedList = new LinkedList(2);
  newLinkedList.append(4);
  newLinkedList.prepend(0);
  newLinkedList.append(100);
  newLinkedList.prepend(99);
  newLinkedList.insert(100,1);
  newLinkedList.remove(0,1);
  newLinkedList.reverseLinkedList();
  