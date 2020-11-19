//Depth First Search is one of the methods used for traversal between Nodes; it is good for finding if a path exists between two nodes
//This Binary Search Tree will be traversed using DFS
//DFS usually uses less memory compared to BFS

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
          
          //if value current node is the one to be deleted
        } else {
  
          //no right
          if(!currentNode.right){
  
            if(!prevNode){
              this.root = currentNode.left;
  
            } else {
  
              if(currentNode.value < prevNode.value){
                prevNode.left = currentNode.left;
                
              } else if(currentNode.value > prevNode.value){
                prevNode.right = currentNode.left;
              }
  
            }
  
            //right child with no left child
          } else if(!currentNode.right.left){
  
            currentNode.right.left = currentNode.left;
  
            if(!prevNode){
              this.root = currentNode.right;
  
            } else {
  
              if(currentNode.value < prevNode.value){
                prevNode.left = currentNode.right;
  
              } else if(currentNode.value > prevNode.value){
                prevNode.right = currentNode.right;
              }
            }
  
            //right child with left child
          } else {
  
            //find left most child node
            let leftMost = currentNode.right.left;
            let leftMostPrev = currentNode.right;
  
            while(leftMost.left){
              leftMostPrev = leftMost;
              leftMost = leftMost.left;
            }
  
            //use left most as the replacement for node to be removed
            leftMostPrev.left = leftMost.right;
            leftMost.left = currentNode.left;
            leftMost.right = currentNode.right;
  
            if(!prevNode){
              this.root = leftMost;
              
            } else {
  
              if(currentNode.value < prevNode.value){
                prevNode.left = leftMost;
  
              } else if (currentNode.value > prevNode.value){
                prevNode.right = leftMost;
              }
  
            }
  
          }
          return true;
        }
  
      }
  
    }
  
    //Depth First Search
    //when called, this method will traverse through every node in this tree, recursively, using all 3 methods and print the values out 
    DFS() {
     console.log("In Order: " + this.DFSInOrder(this.root,[]));
     console.log("Pre Order: " + this.DFSPreOrder(this.root,[]));
     console.log("Post Order: " + this.DFSPostOrder(this.root,[]));
    }

    //traverse the BST using In Order method
    DFSInOrder(node, list){

      //check for left node
      if(node.left){
        this.DFSInOrder(node.left, list);
      }

      //add current node value to list
      list.push(node.value);

      //check for right node
      if(node.right){
        this.DFSInOrder(node.right, list);
      }

      //return list
      return list;
    }

    //traverse the BST using Pre Order method
    DFSPreOrder(node, list){

      //add current node value to list
      list.push(node.value);

      //check for left node
      if(node.left){
        this.DFSPreOrder(node.left, list);
      }

      //check for right node
      if(node.right){
        this.DFSPreOrder(node.right, list);
      }

      //return list
      return list;
    }

    //traverse the BST in Post Order method
    DFSPostOrder(node, list){

      //check for left node
      if(node.left){
        this.DFSPostOrder(node.left, list);
      }

      //check for right node
      if(node.right){
        this.DFSPostOrder(node.right, list);
      }

      //add current node value to list
      list.push(node.value);
      
      //return list
      return list;
    }
  }
  
  let myBST = new BST();
  
  myBST.add(8);
  myBST.add(5);
  myBST.add(7);
  myBST.add(10);
  myBST.add(11);
  myBST.add(3);
  myBST.add(12);
  myBST.add(4);
  
  
  myBST.DFS();