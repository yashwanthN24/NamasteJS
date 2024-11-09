// Inheritance in JS and  other languages is not same so dont compare

// Inheritance in JS is different from Inheritance in other languages

// Inheritance in JS is one object trying to access the methods and properties of
// Other object

let arr = ["Akshay", "Aditya"];

console.log(arr);

let object = {
  name: "Akshay",
  city: "Dehradun",
  getIntro: function () {
    console.log(this.name + " from " + this.city);
  },
};

function fun() {
  //
}

// What is prototype ?

/*

Whenever you create any object JS Engine Automatically puts some hidden propeties into an object 
and attaches to your object 
i.e It attaches an object to your orginal object and thats how u get access to those properties and methods 


// To access that hidden attached object 

// Can do 

// arr.__proto__

// prototype is an object that is attached to each and every thing in JS 
// It has many properties and methods 



// Try these in browser 


arr.__proto__ ; 
Array.prototype ; 

// These two are same 

arr.__proto__.__proto__
Object.prototype 

// These two are same 

arr.__proto__.__proto__.__proto__

// This is null 

// This is prototype chain 

object.__proto__.__proto__ 
Object.prototype 

// These 2 are same 

object.__proto__.__proto__ 


fun.__proto__   ;
Function.prototype
// This is function only
// These 2 are same


fun.__proto__.__proto__;
Object.prototype 

// These 2 are same 




So by this We come to the conclusion 
"Everything in a JS (Javascript) is an Object "
"You create an object or array or function whatever it maybe at the end finally they are objects"


// This is because of Prototype chaining  It ends at null 



*/
