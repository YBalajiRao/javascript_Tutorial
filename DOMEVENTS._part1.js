// JavaScript DOM Manipulation Notes

// 1. Finding HTML Elements

// Using getElementById
let elementById = document.getElementById('exampleId');
// Example: <div id="exampleId">Hello</div>

// Using getElementsByClassName
let elementsByClassName = document.getElementsByClassName('exampleClass');
// Example: <div class="exampleClass">Hello</div>

// Using getElementsByTagName
let elementsByTagName = document.getElementsByTagName('div');
// Example: <div>Hello</div>

// Using querySelector (selects the first matching element)
let firstElement = document.querySelector('.exampleClass');
// Example: <div class="exampleClass">Hello</div>

// Using querySelectorAll (selects all matching elements)
let allElements = document.querySelectorAll('.exampleClass');
// Example: <div class="exampleClass">Hello</div>

// 2. Changing HTML Elements

// Changing innerHTML
elementById.innerHTML = 'New Content';
// Example: <div id="exampleId">New Content</div>

// Changing attributes
elementById.setAttribute('class', 'newClass');
// Example: <div id="exampleId" class="newClass">New Content</div>

// Changing styles
elementById.style.color = 'blue';
// Example: <div id="exampleId" class="newClass" style="color: blue;">New Content</div>

// Changing properties
elementById.hidden = true;
// Example: <div id="exampleId" class="newClass" style="color: blue;" hidden>New Content</div>

// 3. Adding and Deleting Elements

// Adding elements using createElement and appendChild
let newElement = document.createElement('p');
newElement.innerHTML = 'This is a new paragraph';
document.body.appendChild(newElement);
// Example: <p>This is a new paragraph</p>

// Adding elements using insertBefore
let anotherElement = document.createElement('p');
anotherElement.innerHTML = 'Inserted paragraph';
let referenceNode = document.getElementById('exampleId');
document.body.insertBefore(anotherElement, referenceNode);
// Example: <p>Inserted paragraph</p> before <div id="exampleId">New Content</div>

// Deleting elements using removeChild
let parentElement = document.getElementById('parentId');
let childElement = document.getElementById('childId');
parentElement.removeChild(childElement);
// Example: <div id="parentId"> (removed child element) </div>

// Deleting elements using remove
let elementToRemove = document.getElementById('removeMe');
elementToRemove.remove();
// Example: The element with id="removeMe" is removed from the DOM
