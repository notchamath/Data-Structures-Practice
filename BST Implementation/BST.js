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

  remove(value){

    if(!this.root){
      return "This BST is empty";
    }

    let currentNode = this.root;
    let prevNode = null;

    while(currentNode){

      //if value of current node is bigger than the value being searched for, go to left child node
      if(value < currentNode.value){
        prevNode = currentNode;
        currentNode = currentNode.left;

        //if value of current node is smaller than the value being searched for, go to right child node
      } else if(value > currentNode.value) {
          prevNode = currentNode;
          currentNode = currentNode.right;

      } else {
        //no left or right
        if(!currentNode.left && !currentNode.right) {

          if(!prevNode){
            this.root = null;
            return this;
          } else if(prevNode.left.value === value) {
            prevNode.left = null;
            return this;
          }
          prevNode.right = null;
          return this;

          //no right
        } else if(currentNode.left && !currentNode.right) {

          if(!prevNode){
            this.root = currentNode.left;
            return this;
          } else if (prevNode.left.value === value) {
            prevNode.left = currentNode.left;
            return this;
          }
          prevNode.right = currentNode.left;
          return this;

          //no left
        } else if(!currentNode.left && currentNode.right) {

          if(!prevNode){
            this.root = currentNode.right;
            return this;
          } else if(prevNode.left.value == value){
            prevNode.left = currentNode.right;
            return this;
          }
          prevNode.right = currentNode.right;
          return this;

          //has both left and right
        } else {
          let replacementNode = currentNode.right;
          if(!prevNode){
            if(!replacementNode.left){

              replacementNode.left = currentNode.left;
              this.root = replacementNode;
              return this;

            } else if(replacementNode.left) {
              replacementNode = replacementNode.left;
            }
          } else if (prevNode.left.value == value) {
            replacementNode.left = currentNode.left;
            prevNode.left = replacementNode;
          }
           
        }
      }

    }

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
myBST.remove(3);