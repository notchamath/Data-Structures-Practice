//closure function
function fibMaster(){
    //cache stores prev results to avoid unnecessary computational repeats
    cache = {};

    //fib function
    return function fib(n) {
        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) {
                return n;
            } else {
                cache[n] = fib(n - 1) + fib(n - 2);
                return cache[n];
            }
        }
    };
}

const fibRun = fibMaster();

console.log(fibRun(5));