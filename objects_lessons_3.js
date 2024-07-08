// JavaScript Object Properties

// Create an object using the Object constructor
const person = new Object();

// Add properties to the person object
person.firstName = "Balaji";
person.lastName = "Rao";
person.age = 50;
person.eyeColor = "blue";

// Print object properties
console.log(person.firstName + " is " + person.age + " years old."); // Balaji is 50 years old.
console.log(person['firstName'] + " is " + person['age'] + " years old."); // Balaji is 50 years old.

// Delete a property from the object
delete person.age;

// Print the object after deletion
console.log(person); // { firstName: 'Balaji', lastName: 'Rao', eyeColor: 'blue' }
console.log(person['eyeColor']); // blue

// JavaScript Object with Nested Properties
const myObj = {
  name: "John",
  age: 30,
  myCars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat"
  }
};

// Accessing nested properties
console.log(myObj.myCars.car1); // Ford
console.log(myObj.myCars['car1']); // Ford
console.log(myObj['myCars']['car2']); // BMW

// JavaScript Object Methods

// Object methods are actions that can be performed on objects.
// A method is a function definition stored as a property value.

// Create an object with properties and a method
const person2 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  // Adding a method to the object
  name: function(){
    return (this.firstName + " " + this.lastName).toUpperCase();
  }
};

// Call the method and print the result
console.log(person2.name()); // JOHN DOE
