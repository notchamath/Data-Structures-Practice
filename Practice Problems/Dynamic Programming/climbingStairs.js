//Climbing Stairs Problem:
//How many distinct ways to climb to the nth stair if you can take k amount of steps at a time?

function climbStairs(n, k){
    cache = [k];
    cache[0] = 1;

    for(let i=1; i<=n; i++){
        for(let j=1; j<k; j++){
            if(i - j >= 0){
                cache[i % k] += cache[(i-j) % k];
            }
        }
    }

    return cache[n % k];
}