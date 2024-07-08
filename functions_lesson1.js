

/*
    JavaScript Functions: Simple Notes

    1. What is a Function?
    A function is a reusable block of code that performs a specific task. 
    It helps you avoid repeating code and makes yor program more organized.
*/

// 2. Function Declaration
// A function declaration defines a named function. You can call this function anywhere in your code after it has been defined.

// Syntax:
// function functionName(parameters) {
//     // Code to be executed
// }

// Example:
function sayHello(name) {
    return `Hello, ${name}!`;
}

// Usage:
console.log(sayHello('Alice')); // Output: Hello, Alice!

// 3. Function Expression
// A function expression creates a function and assigns it to a variable. The function can be anonymous (without a name).

// Syntax:
// const functionName = function(parameters) {
//     // Code to be executed
// };

// Example:
const add = function(a, b) {
    return a + b;
};

// Usage:
console.log(add(5, 3)); // Output: 8

// 4. Arrow Functions
// Arrow functions provide a shorter syntax for writing functions. They also have a different behavior for the `this` keyword.

// Syntax:
// const functionName = (parameters) => {
    // Code to be executed
// };

// Example:
const multiply = (x, y) => x * y;

// Usage:
console.log(multiply(4, 5)); // Output: 20

// 5. Default Parameters
// You can provide default values for function parameters. If the caller does not provide a value for the parameter, the default value is used.

// Syntax:
// function functionName(parameter = defaultValue) {
    // Code to be executed
// }

// Example:
function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}

// Usage:
console.log(greet());          // Output: Hello, Guest!
console.log(greet('Bob'));     // Output: Hello, Bob!

// 6. Functions Returning Other Functions
// Functions can return other functions. This is useful for creating customized functions.

// Example:
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
console.log(double(4)); // Output: 8

