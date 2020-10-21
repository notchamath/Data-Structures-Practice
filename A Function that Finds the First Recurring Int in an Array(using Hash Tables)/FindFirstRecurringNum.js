// this function finds the first recurring num in an array of ints. Time Complexity of  this function is O(n).
function findFirstRecurringNum(input){
  
    //create hash table
    let map = {};
  
    for (let i = 0; i < input.length; i++){
      //if there is no value at this key, add current num. If there is a value already thats the recurring num!
      if(!map[input[i]]){
        map[input[i]] = true;
      } else {
        return input[i];
      }
    }
  }
  
  findFirstRecurringNum([8,3,2,64,2,5,8,6,3]);