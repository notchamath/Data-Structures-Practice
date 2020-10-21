//this function checks if 2 arrays have any common items and returns those items in a seperate array 
//The Time Complexity of this function is O(a+b) or simply, O(n)

function findCommonItems(array1,array2){

    let map = {};
    let commmonItems = [];
  
    //add all elements of array1 to Hash Table
    for(let i = 0; i < array1.length; i++){
      if(!map[array1[i]]){
        map[array1[i]] = true;
      }
    }
  
    //loop through second array to find elements that are already recorded on Hash Table and add those to commonItems array
    for(let i = 0; i < array2.length; i++){
      if(map[array2[i]]){
        commmonItems.push(array2[i]);
      }
    }
  
    return commmonItems;
  }
  
  const array1 = ['n','k','o','p','a'];
  const array2 = ['o','a','b','c','k','p'];
  findCommonItems(array1,array2);