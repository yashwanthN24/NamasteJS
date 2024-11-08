"use strict";

// this in global space

console.log(this); // this in global space refers to the global object

// Each JS runtime environment has different global Object
// For Browser it's global object is Window Object

// For Nodejs its global object is global

// this in function space or inside a function

function x() {
  // the value of this inside function depends on strict / non-strict mode
  console.log(this);
}

x();

// This in strict mode

// This behaviour because of this substution in Non-strict mode

// if the value of this keyword is undefined or null this keyword
// will be replaced with globalObject only in Non-strict Mode

// To goto strict mode we use "use strict" at the top of the file

// This keyword value depends on how this is called

x(); //  this =  undefined
window.x(); // this = window

// this inside a object's method

// This keyword value depends on the function is called

const obj = {
  a: 10,
  x: function () {
    console.log(this, this.a);
  },
};

obj.x();

// Three Important functions while dealing with this keyword

// - Call , Apply and Bind methods (sharing methods )

const student = {
  name: "akshay",
  printName: function () {
    console.log(this);
  },
};

student.printName();

const student2 = {
  name: "Deepika",
};

student.printName.call(student2);

//this keyword inside arrow functions

// - Arrow functions do not have their own this , they take the value of lexical environment in which they are enclosed

const object = {
  a: 10,
  x: () => {
    console.log(this);
  },
};

object.x();

// this in arrow function becomes the this of that parent's parent i.e the
// enclosing lexical context

const object1 = {
  a: 10,
  x: function () {
    //   Enclosing lexical context
    const y = () => {
      console.log(this); // remember arrow function doesn't have this keyword
    };
    y();
  },
};

object1.x();

// this inside DOM

// this inside DOM is reference to the HTML element ;

// this inside constructor , classes

// this inside classes , constructor refers to the instance being created

/* Summery of this keyword in JS 


- this keyword in global space refers to global object 
   The global object in browser is Window
   The global object in nodejs is global 

- this keyword inside a function depends on strict / non-strict  mode 
   Inside a strict mode the value of this is undefined 
   In non-strict mode the value of this is window (Because of this substitution)
   (this substitution says that whenever this value is undefined or null its value
   is replaced by the value of global object i.e window in case of browser)


- this keyword value depends on how the function is called 

    X() ; // undefined 
    window.x(); // window 


- this keyword inside a object's method 

    value of this keyword is object itself 

    call , apply and bind functions to change default this value 


- this keyword inside a arrow function 

    Arrow function itself has no this value 
    It takes the this value from its enclosing lexical context


*/

/*

1. "this" in global scope always points to the globalObject (globalObject depends on javascript runtime env)
2. "this" in a function depends on 2 things
    a. strict / non strict mode (in strict mode, "this" is undefined, in non strict mode, "this substitution" takes place and "this" points to globalObject)
    b. how the function is being invoked (if we invoke the function using the global object in strict mode, then "this" will point to that globalObject)
3. "this" in a method always points to the object that is used to invoke the method.
4. call, apply & bind are used to share a method with another object (hence the "this" keyword reference would also change accordingly)
5. "this" inside arrow function refers to the enclosing lexical context
6. "this" in DOM points to the HTML element itself on which it is being used

*/
