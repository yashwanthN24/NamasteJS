var c = 100; 

function x() {
    var c = 30; 
    console.log(window.c);
    window.c = 20;
}

x();
console.log(c);


//

// let a = 20;

// {
//     var a = 20;
// }
// Error



// Valid
let a = 20; 

{
    let  a = 20; 
}

// Valid

var a1 = 20; 

{
    let a1 = 20; 
}


// Valid

let abc = 20;

function x() {
    var abc = 20; 
}


// Valid


const h = 10; 

{
    const h = 10; 
}


