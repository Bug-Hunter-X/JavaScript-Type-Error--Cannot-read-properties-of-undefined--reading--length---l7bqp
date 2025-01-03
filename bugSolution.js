function foo(x) {
  if (x === undefined || x === null) {
    return 0; // Handle undefined or null cases
  }
  if (typeof x === 'string' || Array.isArray(x)) {
    return x.length;
  } else {
    return 0; // Or throw an error: throw new Error('Invalid input type');
  }
}

console.log(foo([1, 2, 3])); // Output: 3
console.log(foo("hello")); // Output: 5
console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: 0
console.log(foo(5)); //Output: 0