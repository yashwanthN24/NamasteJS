// JS Datatypes

/*

1) Numbers
2) Strings
3) Booleans 
4) NULL 
5) Undefined
6) Objects

*/

/* Operators 

- ,  + , * , /

*/

// Number

let num1 = 10;
let num2 = 3.12;
console.log(num1 + num2); // not precise because of not handling float properly by JS
// JS is not a proper programming language so Calculations accuracy is not there always there is a small error

num2 = 3.14;
console.log(num1 + num2);

// Strings

const name = "yash";
console.log(name);
const name2 = "yashwanth";
console.log(name2);

let firstName = "yashwanth";
let lastName = "Naddana";

console.log(firstName + " " + lastName);

// Booleans

let isLoggedIN = true;
console.log(isLoggedIN);

// NULL - denotes the absence of a value

let a = null;

// undefined - denotes non- defination of variable

let b = undefined;
let c; // by default undefined can take any value

const person = {
  firstName: "yash",
  lastName: "N",
  age: 22,
  isLoggedIN: false,
};

// JS 1 -> true , 0 -> false
// JS true | false

// true => 1
// false => 0

console.log(1 + "1");
console.log("1" + "1");
console.log("1" + 1);

// string + number = string
// string * num = num

console.log("123" * 1); // returns a number 123 here
console.log("a" * 1); // returns NaN (not a number)

console.log("a" + 1);

// typeof operator

console.log(typeof ("123" * 1));

// getting location

function gotLocation(position) {
  console.log(position);
}

function failedToget() {
  console.log("There was some issue");
}

async function abcd() {
  await navigator.geolocation.getCurrentPosition(gotLocation, failedToget, {
    enableHighAccuracy: true,
  });
}
abcd();

//currying in JS

function add(a) {
  return function (b) {
    return function (c) {
      console.log(a + b + c);
    };
  };
}

add(2)(3)(5);

function sendAutoEmail(to) {
  return function (subject) {
    return function (body) {
      console.log(`Sending email to ${to} subject ${subject} body ${body}`);
    };
  };
}

// sendAutoEmail("yash")("This is important")("Finish async await today");

let step1 = sendAutoEmail("yash");
let step2 = step1("This is important");

step2("Hey yash , complete JS series tonight");

// Using ES6 syntax

const sendEmail = (to) => (subject) => (body) =>
  `Sending email to ${to} subject ${subject} body ${body}`;

const addition = (a) => (b) => (c) => a + b + c;

console.log(addition(1)(2)(3));

// IIFE - Immediately Invoked Function Expression

(function sum(a, b) {
  console.log(a + b);
})(1, 2);

(function sayHello() {
  console.log("Hello");
})();

(() => console.log("I am ES6"))();

const value = (() => 100)();
console.log(value);
