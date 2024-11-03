// 1) What is a Closure ?

// Closure is a combination of a function along with its lexical scope
// Bundled together

// Closure Allows access to outer lexical Scoped variables and functions Even after its removed from
// its orginal scope and moved to somewhere else


// Can You give an Example


function outer() {
    var a = 10; 
    function inner() {
        console.log(a);
    }
    return inner; 
}

outer()();


// Here inner function has access to outer lexical environment
// So now inner has access to a As it forms a closure with outer
// lexical environment

// So if i return this inner function as well it still stores the reference of its lexical environment variables
// So still it can access a correctly
// The value a here is not garbage collected as it forms a closure with function inner


function outer() {
    function inner() {
        console.log(a);
    }
    var a = 10; 
    return inner; 
}

outer()();

// Still same output 10



function outer(b) {
    function inner() {
        console.log(a,b);
    }
    var a = 10; 
    return inner; 
}

outer("hello world")();

// Output : 10 hello world

function outer(b) {
    function inner() {
        console.log(a,b);
    }
    let a = 10; 
    return inner; 
}

outer("hello world")();

// still same output


function outest() {
    var c = 100;
    function outer(b) {
        function inner() {
            console.log(a,b , c);
        }
        // let a = 10; 
        return inner; 
    }
    return outer;
}
let a = 100;
outest()("helloworld")();


// Advantage of Closure

function counter() {
    var count = 0; 
    return function incrementCounter(){
        count++;
        console.log(count);
    }
}


var counter1 = counter();
counter1();
counter1();


var counter2 = counter();
counter2();
counter2();


// Constructor Function

function Counter() {
    var count = 0; 

    this.incrementCounter = function () {
        count++;
        console.log(count);
    }

    this.decrementCounter = function () {
        count--; 
        console.log(count);
    }
}


var counter1 = new Counter();

counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();

// Disadvantages of Closures

// There could be over consumption of memory , because everytime a closure is formed it consumes
// a lot of memory and those closed over variables in closure are not garbage collected , so eventually we accumulate a lot of memory
// if we create a lot of closures
// Because those variables are not garbage collected till the program ends/expires and
// Closures if not handled properly can lead to memory leaks due to accumulation of those close variables of closures the browser freeze itself



// What is Garbage Collector In JS ?

// It is a program in the browser or the JS engine which frees up the unutilized memory
// Automatic Memory management through Garbage Collector Of JS Engine present in Browser


// Relation Between Garbage Collection and Closures

function a() {
    var x = 10; 
    return function b() {
        console.log(x);
    }
}


var y = a();

y();


// Smart Garbage Collection By V8 JS Engine of Chrome Browser



function a() {
    var x = 10 , z = 100; 
    return function b() {
        console.log(x);
    }
}


var y = a();// after this call when this call finishes z is garbage collected but x is not Collected because it forms a Closure with inner returning function
// Thereby the V8 engine Knows smartly which to Garbage Collect Thereby the Name , "Smart Garbage Collection By V8 JS Engine of  Chrome Browser"




y();

// Verify this code by going to source of inspect Devlopers tools and visualize the call stack and the lexical environment to see  the closures and their closed variables values
// at each statement execution

