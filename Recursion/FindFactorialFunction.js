//using loop. Time Complexity: O(n)
function findFactorial(num){
    let answer = 1;
  
    for(let i=2; i<=num; i++){
      answer = answer * i;
    }
  
    return answer;
  }
  
  //using Recursion. Time Complexity: O(n)
  function findFactorialRec(num){
    if(num === 1 || num === 0){
      return 1;
    }
  
   return num * findFactorialRec(num-1);
  }
  
  // findFactorial(5);
  findFactorialRec(3);