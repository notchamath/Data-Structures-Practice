//reverse a String using the built-in JS methods

function reverse(str) {
    if (!str || str.length < 2 || typeof (str) !== "string") {
        return 'Bad Input';
    }

    return str.split('').reverse().join('');
}

console.log(reverse('Hi, My name is Slim Shady'))