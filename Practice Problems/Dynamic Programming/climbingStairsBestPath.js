//Climbing Stairs with Least Expenses and Records The Route:
//What is the best(least costly) way to climb to the nth stair if each step has a cost and you can take maximum of 2 steps at a time?


//time complexity: O(n)
//Space complexity: O(n)
function climbStairs(n, toll){

    //use cache to store tolls for each step(after calculation) 
    //from stores prev step for each step
    let cache = [n+1];
    let from = [n+1];

    //base cases
    cache[0] = 0;
    cache[1] = toll[1];

    //for each step i calculate tolls by using equation which adds the 2 previous steps' tolls to current step's toll
    for(let i=2; i<=n; i++){

        cache[i] = toll[i] + Math.min(cache[i-1], cache[i-2]);

        if(cache[i-1] < cache[i-2]){
            from[i] = i-1;
        } else {
            from[i] = i-2;
        }
    }

    //path will store the least costly path
    let path = [];

    //starting at target step n, add prev step to the array path
    for(let curr = n; curr > 0; curr = from[curr]){
        path.unshift(curr);
    }
    path.unshift(0);

    //return least expensive route
    return path;
}

// n = the target stair
// toll = toll for stepping on each stair

let n = 8;
let toll = [0,3,2,4,6,1,1,5,3];

climbStairs(n, toll);