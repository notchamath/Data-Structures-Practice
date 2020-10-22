//this method will reverse a given Singly-LinkedList. Time Complexity is O(n).

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
    this.next = first;
  
    return this;
  }