function factorial(num) {
    if (num == 1 || num == 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}
function calculateCombine(k, n) {
    return factorial(n) / (factorial(k) * factorial(n - k));
}
console.log(calculateCombine(3, 5));
