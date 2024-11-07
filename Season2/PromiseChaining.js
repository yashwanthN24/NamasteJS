// CreateOrder,
//     proceedToPayment,
//     showOrderSummery,
//     updateWallet,

// Producing Promises

const cart = ["shoes", "iphone", "Guitar"];

// const cart = [];

function createOrder(cart) {
  return new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    const orderID = "12442";

    if (orderID) {
      resolve(orderID);
    }
  });
}

function validateCart(cart) {
  return cart.length !== 0 ? true : false;
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    if (orderId) {
      resolve(`Payment Successful with order No : ${orderId} `);
    } else {
      const err = new Error("Payment Unsuccessful");
      reject(err);
    }
  });
}

function showOrderSummery(info) {
  return new Promise((resolve, reject) => resolve(info));
}

function updateWallet() {
  return new Promise((resolve, reject) => {
    resolve("Wallet Updated");
  });
}

// Consuming Promises

createOrder(cart)
  .then((orderID) => orderID)
  .catch((err) => console.log(err.message))
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => showOrderSummery(paymentInfo))
  .then((value) => console.log(value))
  .then(() => updateWallet())
  .then((val) => console.log(val))
  .catch((err) => console.log(err.message));
