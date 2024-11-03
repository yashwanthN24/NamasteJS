// JS is synchronous Single - Threaded Language

// Single Threaded : JS Can only execute one command at a time

// Synchronous : In a specific order line by line , Can go to next line only if
//               Previous line is done


console.log(b);
let a = 10; 
console.log(a);

var b = 11; 
console.log(b);

// let and const variables are also hoisted but they become part
// of a temporal dead zone till they are intialized , so reffering
// them before intialization gives a reference error.


// let and const variable dont get attached themselves with the global
// object i.e window object

// this.b  accessible
// this.a undefined


// let is more stricter than var

// let a = 10;


// Cant redeclare like var

var ab = 1000; 

var ab = 1;

// var allows redeclaration of variables which is dangerous for productions
// and leads to uneccesary modification

let c; 
c = 10; // possible

// const con;error
// const con = 123;


// but const con ; is error constants must be intialised


// Note : Syntax error means One line also wont run in JS
//        Even Though first line is just console.log("Hello");


// const is used to create constants the dont change their values

// var => has functioned scope i.e var is with respect to one execution Context
// in Call Stack

// let and const are Block Scoped 