// array_methods.js

// 1. `push()` Method
// Purpose: Adds one or more elements to the end of an existing array.
// Returns: The new length of the array.
// Modifies: The original array.
let numbers = [1, 2, 3];
numbers.push(4, 5);
console.log('After push:', numbers);
// Output: [1, 2, 3, 4, 5]

// 2. `concat()` Method
// Purpose: Combines two or more arrays into a new array.
// Returns: A new array that includes elements from the original arrays.
// Does not modify: The original arrays.
let fruits = ['Apple', 'Banana'];
let vegetables = ['Carrot', 'Broccoli'];
let food = fruits.concat(vegetables);
console.log('After concat:', food);
// Output: ['Apple', 'Banana', 'Carrot', 'Broccoli']

// 3. Spread Operator (`...`)
// Purpose: Expands elements of an array or properties of an object into a new array or object.
// Returns: A new array or object with the expanded elements.

// Example with Arrays
let list1 = [1, 2];
let list2 = [3, 4];
let combinedList = [...list1, ...list2];
console.log('After spread operator with arrays:', combinedList);
// Output: [1, 2, 3, 4]

// Example with Objects
let person = { name: 'Alice', age: 25 };
let contact = { email: 'alice@example.com' };
let profile = { ...person, ...contact };
console.log('After spread operator with objects:', profile);
// Output: { name: 'Alice', age: 25, email: 'alice@example.com' }

// 4. `Array.from()` Method
// Purpose: Creates a new array from an array-like or iterable object.
// Optionally applies: A map function to each element of the array-like object.

// Example with String
let str = 'hello';
let arr = Array.from(str);
console.log('Array from string:', arr);
// Output: ['h', 'e', 'l', 'l', 'o']

// Example with Set
let mySet = new Set([1, 2, 3, 4]);
let arrFromSet = Array.from(mySet);
console.log('Array from set:', arrFromSet);
// Output: [1, 2, 3, 4]


