//Climbing Stairs Problem:
//How many distinct ways to climb to the nth stair if you can take k amount of steps at a time?
//time: O(nk), space: O(k)

function climbStairs(n, k){
    //cache only needs to be the length of k as we are only adding the k previous elements
    cache = [k];
    cache[0] = 1;

    //go through each stair, get the value for current stair by adding the previous k values and save the value in cache
    for(let i=1; i<=n; i++){
        for(let j=1; j<k; j++){
            //cache[i] = cache[i-1] + cache[i-2] + cache[i-3] + ... + cache[i-k]
            if(i - j >= 0){
                if(!cache[i % k]){
                    cache[i % k] = cache[(i-j) % k];
                } else{
                    cache[i % k] += cache[(i-j) % k];
                }
            }
        }
    }

    return cache[n % k];
}

// n = the target stair
// k = maximum steps you can take at a time

let n = 4;
let k = 2;
climbStairs(n, k);