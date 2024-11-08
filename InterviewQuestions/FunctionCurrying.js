// Function Currying Using Bind Function

let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyBy2 = multiply.bind(this, 2);

// same as

// let multiplyBy2 = function (y) {
//     let x = 2;
//     console.log(x * y);
// }

multiplyBy2(5);

let multiplyBy3 = multiply.bind(this, 3);
multiplyBy3(5);

// Function Currying using Closures

let Multiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let MultiplyBy2 = Multiply(2);
MultiplyBy2(3);

let MultiplyBy3 = Multiply(3);
MultiplyBy3(10);

/*


The a => b => syntax you’re seeing is a way of defining curried functions using arrow functions in JavaScript. This syntax might look unfamiliar at first, but it's just a more concise way of writing nested functions. Let’s break it down with an example.

Understanding a => b => Syntax
In a curried function like a => b =>, each part represents a separate function that returns another function. Here’s how it works:


const add = a => b => a + b;
This is equivalent to:


const add = (a) => {
  return (b) => {
    return a + b;
  };
};

Step-by-Step Breakdown
Outer Function (First Argument): The first part, a =>, creates a function that takes one argument a.
Inner Function (Second Argument): This function then returns another function, b =>, which takes a second argument b.
Final Computation: Finally, this inner function computes a + b and returns the result.
Usage Example
Using add as defined above:


console.log(add(2)(3)); // Output: 5
add(2) returns a function that expects a second argument, b.
Then add(2)(3) is like calling the inner function with b = 3, resulting in 2 + 3 = 5.
Why Use This Syntax?
This syntax is common in functional programming for creating curried functions. It allows you to partially apply arguments, creating more flexible and reusable code. For example:


const addFive = add(5); // Partially apply `a` as 5
console.log(addFive(3)); // Output: 8
Here, addFive is a new function that always adds 5 to whatever argument it receives, thanks to the currying syntax.



Modern JavaScript Syntax
In modern JavaScript, arrow functions can make currying more concise:


const curriedAdd = a => b => c => a + b + c;

console.log(curriedAdd(1)(2)(3)); // Output: 6


Real-World Example of Currying
Currying is useful when you have functions that will often be called with the same arguments. For example:


const greet = greeting => name => `${greeting}, ${name}!`;

const sayHello = greet("Hello");
console.log(sayHello("Alice")); // Output: "Hello, Alice!"
console.log(sayHello("Bob"));   // Output: "Hello, Bob!"

In this example, greet is curried to create a specific sayHello function, which allows you to easily greet multiple people with "Hello."


1. Currying Turns a Function with Multiple Arguments into Nested Single-Argument Functions
The essence of currying is that it transforms a function that normally takes multiple arguments at once into a series of functions, each taking one argument.



// A simple two-argument function
function multiply(x, y) {
  return x * y;
}

// Curried version of the function
function curriedMultiply(x) {
  return function(y) {
    return x * y;
  };
}

// Using curried function
const double = curriedMultiply(2);
console.log(double(5)); // Output: 10


In this example, curriedMultiply allows you to set x in advance, so double is effectively a preconfigured function to multiply any number by 2.



Partial Application with Curried Functions

One of the primary uses of currying is "partial application," where you fix some arguments of the function in advance and reuse it with different values later.

Using the above example:


const triple = curriedMultiply(3); // Fixes `x` to 3
console.log(triple(5)); // Output: 15



3. Real-World Scenarios of Currying
The core of currying is particularly useful for scenarios where you often use similar values in function calls. Common uses:

Creating reusable utilities like greetUser("Hello")("Alice").
Pre-configuring functions with partially applied arguments, like multiplyBy10 or subtract5.


Key Points to Remember
Currying transforms a function to take one argument at a time.
Use currying for partial application to pre-set some function arguments.


*/
