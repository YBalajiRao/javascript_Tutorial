// Rest Operator and Spread Operator in JavaScript

// **Rest Operator (`...`)**
// - **Definition**: The rest operator allows a function to accept an indefinite number of arguments as an array.
// - **Syntax**: `function myFunc(...args) { }`
// - **Use Case**: When you want to collect multiple arguments into a single array.


// Example using Rest Operator in a function to sum multiple arguments
function addPrices(...num1) {
    // The rest operator (...) collects all the arguments into an array called num1
    let sum = 0; // Initialize sum to 0
    // Loop through each number in the num1 array
    for (let i of num1) {
        // Add each number to the sum
        sum += i;
    }
    // Return the total sum
    return sum;
}

// Calling the addPrices function with multiple arguments
let result = addPrices(300, 460, 245, 356);

// Output the result to the console
console.log(result); // Expected output: 1361


// **Spread Operator (`...`)**
// - **Definition**: The spread operator allows an iterable (like an array) to be expanded into individual elements.
// - **Syntax**: `[...iterable]` or `function(...args) { }`
// - **Use Case**: When you want to expand elements of an array or object into individual elements or properties.


// Example using Spread Operator to combine arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = [...array1, ...array2];

// Output the combined array to the console
console.log(combinedArray); // Expected output: [1, 2, 3, 4, 5, 6]

// **Difference between Rest and Spread Operator**
// - The rest operator is used to collect multiple elements into an array.
// - The spread operator is used to spread elements from an array or object.

// Example using Rest Operator to collect arguments
function collectArgs(...args) {
    console.log(args);
}

// Calling the function with multiple arguments
collectArgs(1, 2, 3, 4); // Expected output: [1, 2, 3, 4]

// Example using Spread Operator to expand elements
let arr = [1, 2, 3];
console.log(...arr); // Expected output: 1 2 3
