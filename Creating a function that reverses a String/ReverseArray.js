//simple reverse function written from scratch, O(n) Time Complexity

function reverse(str) {
    if (!str || str.length < 2 || typeof (str) !== "string") {
        return 'Bad Input';
    }

    const numOfItems = str.length - 1;
    const backwards = [];

    for (let i = numOfItems; i >= 0; i--) {
        backwards.push(str[i]);
    }

    return backwards.join('');
}

console.log(reverse('Hi, My name is Slim Shady'))