//creating a function that sorts an array using Selection Sort
//Selection sort has a time complexity of O(n^2) and a space complexity of O(1)

function selectionSort(arr) {
    const length = arr.length;
    let min, temp;
  
    //if a value to the right of the element i, is smaller than the value at i, swap the 2 values 
    for(let i=0; i<length; i++){
  
      min = i;
      temp = arr[i];
      //starting second loop from i+1 to avoid an unnecessary iteration comparing to self
      for(let j=i+1; j<length; j++){
        if(arr[j] < arr[min]){
          min = j;
        }
      }
  
      arr[i] = arr[min];
      arr[min] = temp;
    }
  
    return arr;
  }
  
  
  let nums = [5,2,88,2,45,4,11,0,3,2,36];
  
  selectionSort(nums);