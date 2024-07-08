// Part 1: Introduction to Objects in JavaScript

// **1. Object Declaration**
// Objects in JavaScript are collections of key-value pairs. Each key is a string (or symbol), and each value can be any data type.

// Example of an object with various properties:
let Personal_info = {
    'student name': 'Yadhav',      // Key with a space, enclosed in quotes
    age: 34,                       // Key without spaces
    place: 'Madanapalle',          // Key without spaces
    city: 'Andhra Pradesh'         // Key without spaces
};

// **2. Accessing Object Properties**
// You can access object properties using dot notation or bracket notation.

// Dot Notation:
console.log(Personal_info.age);  // Output: 34
console.log(Personal_info.place); // Output: Madanapalle

// Bracket Notation (useful for keys with spaces or special characters):
console.log(Personal_info['student name']); // Output: Yadhav
console.log(Personal_info['city']);         // Output: Andhra Pradesh

// **3. Modifying Object Properties**
// You can update the values of existing properties or add new properties to the object.

// Update a property value:
Personal_info.age = 35; // Updates age to 35

// Add a new property:
Personal_info.country = 'India'; // Adds a new property 'country'

// **4. Deleting Object Properties**
// To remove a property from an object, use the `delete` operator.

delete Personal_info.city; // Removes the 'city' property

// **5. Iterating Over Object Properties**
// Use a `for...in` loop to iterate over all properties in an object.

for (let key in Personal_info) {
    console.log(key + ': ' + Personal_info[key]);
}
// Output will include:
// student name: Yadhav
// age: 35
// place: Madanapalle
// country: India

// **Summary**
// - **Object Declaration**: Use curly braces `{}` and key-value pairs separated by colons.
// - **Access Properties**: Use dot or bracket notation.
// - **Modify/Add Properties**: Update values or add new properties as needed.
// - **Delete Properties**: Use `delete` to remove properties.
// - **Iterate Properties**: Use `for...in` loop to go through all properties.

// This concludes Part 1 of objects in JavaScript. Practice these concepts to become familiar with handling objects effectively.
