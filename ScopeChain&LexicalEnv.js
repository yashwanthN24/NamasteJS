function a() {
    var b = 10; 
    c();
    function c() {
        var a1 = 14;
        console.log(b);
    }
}

a();
// console.log(b);

// Go to sources Add breakpoint and check Call Stack (anonymous is Global execution context (GEC))

// Scope Shows the Lexical Environment for that particular Execution Context of Call Stack

