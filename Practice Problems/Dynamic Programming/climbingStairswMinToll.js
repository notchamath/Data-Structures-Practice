//Climbing Stairs with Least Expenses Problem:
//What is the best(least costly) way to climb to the nth stair if each step has a cost and you can take k amount of steps at a time?


function climbStairs(n, k, toll){
    let cache = [n + 1];
    cache[0] = 0;
    cache[1] = toll[1];

    for(let i=2; i<=n; i++){
        cache[i] = toll[i] + Math.min(cache[i - 1], cache[i - 2]);
    }

    return cache[n + 1];
}

// n = the target stair
// k = maximum steps you can take at a time
// toll = toll for stepping on each stair

let n = 4;
let k = 2;
let toll = [];
climbStairs(n, k, toll);