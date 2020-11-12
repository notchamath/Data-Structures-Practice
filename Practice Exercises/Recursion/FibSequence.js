//fibonacci sequence using Recursion
//Time complexity is O(2^n)

function fibonacciSeq(num){
    if(num < 2){
      return num;
    }
  
    return fibonacciSeq(num-1) + fibonacciSeq(num-2);
  }
  
  fibonacciSeq(8);