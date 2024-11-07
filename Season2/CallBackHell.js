console.log("Namaste JS");

setTimeout(function callback() {
  console.log("Javascript");
}, 5000);

console.log("Season 2");

// Good part of using Callbacks is It allows for Asynchronous nature in JS

const cart = ["shoes", "pants", "kurtha"];

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummery(function () {
      api.updateWallet();
    });
  });
});

// ISSUES   WITH CALLBACKS

// This is callback hell is unmaintanable and tough to understand   code

// Inversion Of Control - trusting other function to call back this function later

/*


wo issues while using callbacks

1 - Callback hell
When a function is passed as an argument to another function, it becomes a callback function. This process continues and there are many callbacks inside another's Callback function.
This grows the code horizontally instead of vertically. That mechanism is known as callback hell. 

2 - Inversion of control
The callback function is passed to another callback, this way we lose the control of our code. We don't know what is happening behind the scene and the program becomes very difficult to maintain. 
That process is called inversion of control. 





1.) "Time, tide and JS waits for none"
2.) Callback function enables us to do async programming in JS. We use this for some functions that are interdependent on each other for execution. For eg: Ordering can be done after adding items in cart. So we pass cb functions as argument to functions which then call the cb function passed. However this causes some problems:

     a.) Callback Hell: When a callback function is kept inside another function, which in turn is kept inside another function. (in short, a lot of nested callbacks). This causes a pyramid of doom structure causing our code to grow horizontally, making it tough to manage our code.

     b.) Inversion of control: This happens when the control of program is no longer in our hands. In nested functions, one API calls the callback function received but we don't know how the code is written inside that API and how will it effect our code. Will our function be called or not? What if called twice? What if it has bogs inside it? We have given control of our code to other code. 


*/
