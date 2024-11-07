/*

- what is async ? 
    -Keyword that is used before a function to create a async function 

    async Function what difference from normal function 

    -async function always returns a Promise 
    - If instead of promise u return any value , The function automatically wraps
      that value inside a promise and returns that promise 
    - So eventually async function always returns a promise (directly or indirectly)

*/

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved Value");
  }, 10000);
});

async function getData() {
  return promise;
}

const data = getData();
console.log(data);

// data.then((val) => console.log(val));

// - what is await ?

// async and await are used to handle Promises

// function getdata() {
//   // JS engine will not for the promise to be resolved
//   promise.then((val) => console.log(val));
//   console.log("namaste javascript");
// }

// getdata();

async function handlePromise() {
  console.log("Hello world");
  // JS engine was waiting for the promise to be resolved
  // In async function  the program waits at that await statement
  const val = await promise;
  console.log("namaste Javascript");
  console.log(val);

  const val1 = await promise;
  console.log("namaste Javascript");
  console.log(val1);
}

handlePromise();

// await is a keyword that only can be used inside an async function

//  we write await before a promise and it resolves the promise
