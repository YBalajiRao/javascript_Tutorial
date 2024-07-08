// Arrays in JavaScript
// Arrays are used to store multiple values in a single variable. 
// Each value in an array is called an element, and each element has a numeric index starting from 0.

// Initial array
let myArray = [0, 1, 2, 3, 4, 5]; // Creates an array with six elements

// Using pop() to remove the last element
myArray.pop(); // Removes the last element (5) from the array
// Expected output after pop: [0, 1, 2, 3, 4]

// Using push() to add elements to the end
myArray.push(12, 35, 56, 788); // Adds elements 12, 35, 56, and 788 to the end of the array
// Expected output after push: [0, 1, 2, 3, 4, 12, 35, 56, 788]

// Using shift() to remove the first element
myArray.shift(); // Removes the first element (0) from the array
// Expected output after shift: [1, 2, 3, 4, 12, 35, 56, 788]

// Using unshift() to add elements to the beginning
myArray.unshift(23, 45, 132); // Adds elements 23, 45, and 132 to the beginning of the array
// Expected output after unshift: [23, 45, 132, 1, 2, 3, 4, 12, 35, 56, 788]

console.log("The slice is");
// Using slice() to create a new array from index 1 to 4 (excluding index 4)
let newArray = myArray.slice(1, 4); // Creates a new array with elements from index 1 to 3
console.log(newArray); // Expected output: [45, 132, 1]

console.log("The Original array is");
console.log(myArray); // Displays the modified original array: [23, 45, 132, 1, 2, 3, 4, 12, 35, 56, 788]

console.log("The splice is");
// Using splice() to remove 3 elements starting from index 1
let newArraySplice = myArray.splice(1, 3); // Removes 3 elements starting from index 1 and returns them
console.log(newArraySplice); // Expected output: [45, 132, 1]

console.log("The Original array is");
console.log(myArray); // Displays the modified original array after splice: [23, 2, 3, 4, 12, 35, 56, 788]
