// This function calculates the nth Fibonacci number
// @param {number} n - The index of the Fibonacci number to be calculated
// @return {number} - The nth Fibonacci number
function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(10)); // Example usage: calculate the 10th Fibonacci number

// This function adds two numbers
// @param {number} a - The first number to be added
// @param {number} b - The second number to be added
// @return {number} - The sum of the two numbers
function add(a, b) {
  return a + b;
}
