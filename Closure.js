// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     y();
// }

// x();


function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    return y;
}

var z = x();
console.log(z);
z();

// Function along with its Lexical Scope Bundled Together Forms a Closure

// When u return a inner function from outer function A Closure is returned

function x() {
    var a = 7;
    return function y() {
        console.log(a);
    }
    
}

var z = x();
console.log(z);
z();

// This code also same as above


function z() {
    var b = 900; 

    function x() {
        var a = 7; 
        function y() {
            console.log(a, b);
        }
        y();
    }
    x();
}

z();



// USES of Closures

// -Module Design Pattern
// -Currying
// -Functions like once
// -memoize
// -maintaining state in async world
// -setTimeouts
// -Iterators
// and Many more...


