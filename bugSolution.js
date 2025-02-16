function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Or handle null values in another appropriate way
  } else if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle non-number inputs
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(null, null)); // Output: 0
console.log(foo('a', 1)); //Output: NaN