//Graphs are one of the best ways to represent real-world relationships but scaling graphs is difficult

//Graph class
class Graph{

    //construct the Graph
      constructor(){
        this.adjacentList = {};
        this.numOfNodes = 0;
      }
    
      //add nodes
      addNode(node){
        this.adjacentList[node] = [];
        this.numOfNodes++;
    
        return this;
      }
    
      //add edges between nodes
      addEdges(node1, node2){
    
        //check for invalid nodes
        if(!this.adjacentList[node1] || !this.adjacentList[node2]){
          return false;
        }
    
        //bidirectional Graph
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    
        return this;
      }
    }
    
    const myGraph = new Graph();
    
    myGraph.addNode(0);
    myGraph.addNode(1);
    myGraph.addNode(2);
    myGraph.addNode(3);
    
    myGraph.addEdges(0,2);
    myGraph.addEdges(1,2);
    myGraph.addEdges(3,2);
    myGraph.addEdges(1,3);