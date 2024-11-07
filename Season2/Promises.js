// Promises are used to Handle Async operations in JS

const cart = ["shoes", "pants", "kurta"];

// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId);
// });

// const promise = createOrder(cart);

// Promise is an object with some key valued pairs in them
// { data :  orderDetails}

// promise.then(function (orderId) {
//   proceedToPayment(orderId);
// });

// Promises make sure that the callback function is called only after a completion of a previous task
// Making it reliable

// It calls the callback only once as promises are guranted by javascript to execute only one through .then() method

const GITHUB_API = "https://api.github.com/users/akshaymarch7";

const user = fetch(GITHUB_API);

console.log(user); // prints the current promise  pending because its async operation
// but promise state will be fufilled because chrome browser updates the promise object with the response data

// so only promise is shown as pending whereas promise state is shown as fulfilled

user
  .then(function (data) {
    console.log(data);
    return data.json();
  })
  .then(function (data) {
    console.log(data);
  });

// For Interviews Tell

/*


- Promise object is a placeholder which will be filled later with a value.

-Promise is a placeholder for a certain period of time until we recieve a value from a Asynchronous Operation 

-Promise is a container for a future value 

MDN Defination   (Tell this in interview )

-The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

*/

// Promise Chaining in Javascript

createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function () {
    showOrderSummery(paymentInfo, function () {
      updateWalletBalance();
    });
  });
});

// This is callBack hell also called as Pyramid of DOME

// This can be avoided by using Promise Chaining in JS

createOrder(cart)
  .then(function (orderID) {
    return proceedToPayment(orderID);
  })
  .then(function (paymentInfo) {
    return showOrderSummery(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo);
  });

// Above same code but now we used arrow function instead of function expression as callback in
// below code

createOrder(cart)
  .then((orderID) => proceedToPayment(orderID))
  .then((paymentInfo) => showOrderSummery(paymentInfo))
  .then((paymentInfo) => updateWalletBalance(paymentInfo));

/*

1. What are Promises?
Promises are objects which are used to perform asynchronous operations. They are just like placeholders to store a future value that will be returned after some time. They contain two properties: PromiseState and PromiseResult.

 2. Importance of Promises:
a) Promises can help us to write trust worthy code.
b) Promises are used to solve the problems of callbacks like inversion of control and callback hell.
c) They give us the result prompt in three states: 1) Pending 2) Fulfilled 3) Rejected
d) We can attach function to promise object and retrieve its value unlike callbacks no need to pass the function.
e) Nesting can be done in Promises and with the help of that we can return the values in each individual chain.

*/

// This is about Consuming a Promise
