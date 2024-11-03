function a() {
    console.log(b);
}

var a = 10; 
a(); // error because during memory phase a intially placed as function and again a is created as a variable

// So now a is a variable and no longer a function

