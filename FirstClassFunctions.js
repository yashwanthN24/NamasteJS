// Function Statement

a();
b();
function a() {
  console.log("a called");
}

// Function Expression

var b = function () {
  console.log("b called");
};

// Difference Between Function Statement and Function Expression is
// In Hoisting , Function Expressions are hoisted just like var variables ;

// Function Declaration aka Function Statement Both are same

function c() {
  console.log("c called");
}

// Anonymous Function
/*
function() {
    
}
*/

var ab = function () {};

// Named Function Expression

var cd = function xyz() {
  console.log(xyz);
  console.log("Named Function Expression");
};

// xyz();  error

cd();
console.log(cd);

// Parameters and Arguments

/*

- Parameters are variables present in function defination or Function Statement
- Arguments are actual values passed to the functions while calling them 

*/

var cs = function (param1, param2) {
  console.log(param1, param2);
};

cs(1, 2);

// First Class Functions
