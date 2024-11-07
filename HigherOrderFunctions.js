/*

Higher Order Function 

-A function which takes another function as input to itself or returns
a function from itself is called Higher Order Function 

-The function passed into higher order function is called Callback Function 
Which is called sometime else in program 

-All this is possible because functions are First class Citizens in  Javascipt (JS)


Functional Programming is thinking of  logic in terms of smaller functions and passing 
them to another functions , treating functions as values  







*/

function x() {
  console.log("My name is Yashwanth");
}

function y(func) {
  func();
}

y(x);

// Solving Coding Problems Using Functional Programming of JS

// Array containing radius of 4 circles
const radius = [3, 1, 2, 4];

const calculateArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};

console.log(calculateArea(radius));

// now to find circumference of 4 circles with radius radius array

const calculateCircumference = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
};

console.log(calculateCircumference(radius));

// Now to calculate Diameter of 4 circles with radius as radius array

const Diameter = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }
  return output;
};

console.log(Diameter(radius));

// But we are repeating ourself with the same looping on the radius array

// DRY Principle = Dont repeat Yourself
