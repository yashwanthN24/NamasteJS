// Global Execution Context

// Global Execution Context creates a global object i.e window object in
// case of browser
// Also creates a This keyword



var a = 10; 


function abc() {
    console.log("Hello");
}


console.log(a);
console.log(this.a);
console.log(window.a);

console.log(this === window);


// console.log(x);
// not defined 

