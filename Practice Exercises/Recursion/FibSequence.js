//fibonacci sequence using Recursion

function fibonacciSeq(num){
    if(num < 2){
      return num;
    }
  
    return fibonacciSeq(num-1) + fibonacciSeq(num-2);
  }
  
  fibonacciSeq(8);