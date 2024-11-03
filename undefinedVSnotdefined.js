console.log(a);
var a = 7; 

console.log(a);
// console.log(x); // not defined reference error

if (a === undefined) {
    console.log(a, " is undefined ");
} else {
    console.log(a, "is not undefined");
}

// JS is loosely typed language OR weakly types language 

// -Can put anything to variables at any time


var n1;
console.log(n1);
n1 = 10;
console.log(n1);
n1 = "Hello world";
console.log(n1);


// Mistake you should not make while using undefined

a = undefined;// Avoid doing this 

