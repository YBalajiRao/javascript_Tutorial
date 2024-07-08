// Part 2: Understanding the 'this' Keyword in JavaScript Objects

// Example of 'this' in a method
const student = {
    name: 'Balajirao',
    age: 34,
    greet: function() {
        // 'this' refers to the 'student' object
        console.log('Hello, ' + this.name); // Output: Hello, Balajirao
    }
};

student.greet(); // Call the method to see the output

// Example of 'this' in a nested object
const company = {
    name: 'Tech Corp',
    address: {
        city: 'New York',
        getAddress: function() {
            // 'this' refers to the 'address' object
            return this.city; // Output: New York
        }
    },
    getCompanyName: function() {
        // 'this' refers to the 'company' object
        return this.name; // Output: Tech Corp
    }
};

console.log(company.address.getAddress()); // Output: New York
console.log(company.getCompanyName()); // Output: Tech Corp

// Example of 'this' in a constructor function
function Person(name, age) {
    this.name = name; // 'this' refers to the new Person object
    this.age = age;
    this.greet = function() {
        // 'this' refers to the Person object
        return 'Hello, my name is ' + this.name; // Output: Hello, my name is Alice
    };
}

const person1 = new Person('Alice', 30); // Create a new Person object
console.log(person1.greet()); // Call the method to see the output

// Example of 'this' in a method and its context
const anotherPerson = {
    name: 'Bob',
    introduce: function() {
        console.log('I am ' + this.name); // Output: I am Bob
    }
};

anotherPerson.introduce(); // Call the method to see the output


