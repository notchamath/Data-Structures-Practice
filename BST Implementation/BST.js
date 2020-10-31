//create Node class
class Node{
    constructor(value){
      this.value = value;
      this.count = 1;
      this.left = null;
      this.right = null;
    }
  }
  
  //create Binary Search Tree class
  class BST{
    constructor(){
      this.root = null;
    }
  
    //add values to binary Tree
    add(value){
      const newNode = new Node(value);
  
      //if BST is empty, add new node as the root
      if(!this.root){
        this.root = newNode;
        return this;
      }
  
      let currentNode = this.root;
  
      while(true){
  
        //if value of current node is bigger than the value being added, go to left child node
        if(currentNode.value > newNode.value){
          if(!currentNode.left){
            currentNode.left = newNode;
            return this;
          }
  
          currentNode = currentNode.left;
  
          //if value of current node is smaller than the value being added, go to right child node
        } else if(currentNode.value < newNode.value) {
          if(!currentNode.right){
            currentNode.right = newNode;
            return this;
          }
  
          currentNode = currentNode.right;
  
          //if value being added is a duplicate of a value thats already in the BST, counter will increment by 1 eachtime (counter records number of repeats including the original)
        } else if(currentNode.value === newNode.value) {
          currentNode.count++;
          return this;
        }
  
      }
    }
  
    search(value){
      //if BST is empty, return this msg
      if(!this.root){
        return "This BST is empty";
      }
  
      let currentNode = this.root;
  
      while(currentNode){
  
        //if value of current node is bigger than the value being searched for, go to left child node
        if(value < currentNode.value){
          currentNode = currentNode.left;
  
          //if value of current node is smaller than the value being searched for, go to right child node
        } else if(value > currentNode.value) {
            currentNode = currentNode.right;
  
          //if you find the correct node return it
        } else {
          return currentNode;
        }
  
      }
      return "Value Not Found in this BST"
    }
  }
  
  let myBST = new BST();
  
  myBST.add(8);
  myBST.add(8);
  myBST.add(8);
  myBST.add(7);
  myBST.add(10);
  myBST.add(11);
  myBST.add(10);
  myBST.add(3);
  myBST.search(100);