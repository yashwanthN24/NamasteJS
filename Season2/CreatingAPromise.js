// Consuming or using a Promise for an API call

const cart = ["shoes"];

// console.log(promise);

// createOrder(cart)
//   .then(function (orderID) {
//     console.log(orderID);
//     return orderID;
//   })
//   .then(function (orderID) {
//     return proceedToPayment(orderID);
//   })
//   .then(function (paymentInfo) {
//     console.log(paymentInfo);
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   });

// In Promise Chaining , we must either return some data or a promise to the next
// Chain of then()

// Creating our own Promise

function createOrder(cart) {
  const promise = new Promise(function (resolve, reject) {
    //

    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    const orderID = "133jm";
    if (orderID) {
      setTimeout(() => resolve(orderID), 5000);
    }
  });

  return promise;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Successful");
  });
}

function validateCart(cart) {
  return false;
}

// /*

createOrder(cart)
  .then(function (orderID) {
    console.log(orderID);
    return orderID;
  })
  .catch(function (err) {
    console.log(err.message);
  }) // this catches only above code errors i.e only createorder errors and executes rest all
  .then(function (orderID) {
    return proceedToPayment(orderID);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function () {
    console.log("This excutes always");
  });

// then is always called after catcheh if then is placed after catch

// */


/*

How Promise Execution Actually Works
1. When new Promise(executor) is called, JavaScript:
• Creates a Promise object in pending state.
• Creates two internal control functions: resolve and reject.
• Immediately calls the executor function, passing these two functions into it.
2. The executor function starts the async task
(API call, DB query, timeout, etc.).
3. When the async task finishes:
• If successful -+ executor calls resolve(result)
• If failed —+ executor calls reject(error)
4. Calling resolve or reject :
• Changes the Promise state from pending to fulfilled or rejected
• Stores the result or error internally
• Triggers all attached .then() or .catch() callbacks
5.then() runs automatically when the Promise is fulfilled.
.catch() runs automatically when the Promise is rejected.


*/
