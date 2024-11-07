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

function proceedToPayment(prderId) {
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

// */
