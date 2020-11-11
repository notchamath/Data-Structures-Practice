//creating a function that sorts an array using Bubble Sort
//Bubble sort has a time complexity of O(n^2) because of the nested loops and a space comeplexity of O(1)

function bubbleSort(arr){
    let length = arr.length;
   
    //for each element in array, compare the value in front of it, make sure value at i < i+1
    for(let i=0; i<length; i++){
        for(let j=0; j<length; j++){
   
            if(arr[j] > arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
   
        }
     }
   
     return arr;
   }
   
   let arr = [5,2,88,2,45,4,11,0,3,2,36]
   bubbleSort(arr);