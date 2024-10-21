/******************************************
 *            Arrow Functions             *
 ******************************************/

// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

/******************************************
 *  IIFE (Immediately Invoked Function Expression)  *
 ******************************************/

// Traditional IIFE
(function () {
  // code here
})();

// Arrow function IIFE
(() => {
  // code here
})();

/******************************************
 *            Array Methods              *
 ******************************************/

// Map
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);

// Filter
const evenNumbers = numbers.filter((num) => num % 2 === 0);

// Reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// Push
numbers.push(4);

// Join
const joined = numbers.join(", "); // "1, 2, 3, 4"

/******************************************
 *            Object Methods             *
 ******************************************/

// Object.keys
const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj); // ['a', 'b', 'c']

// Object.values
const values = Object.values(obj); // [1, 2, 3]

// Object.entries
const entries = Object.entries(obj); // [['a', 1], ['b', 2], ['c', 3]]

/******************************************
 *            String Methods             *
 ******************************************/

const str = "Hello, world!";

// indexOf
const index = str.indexOf("world"); // 7

// slice
const sliced = str.slice(7); // "world!"

// split   Purpose: Splits a string into an array of substrings based on a specified delimiter.
const splitted = str.split(","); // ['Hello', ' world!']

//reverse array   Purpose: Reverses the order of elements in an array in place (modifies the original array).
str.reverse();

//join()   Purpose: Joins all elements of an array into a string, with an optional separator.
str.join(separator);



// trim
const trimmed = str.trim(); // "Hello, world!"
