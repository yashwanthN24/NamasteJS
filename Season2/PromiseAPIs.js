/*


1) Promise.all(); 

- To do Parallel API Calls  and get results 


Promise.all([p1 , p2 , p3]); => gives a result array [ val1 , val2 , val3] after 3s
              3s , 2s , 1s

waits for all of them to finish

if any of them fails returns a global Error 

2) Promise.allSettled()

- returns array of fulfilled promises (either fulfilled or rejected) 

- if error in any promiuse returns that promise erro in thta array 
same as promise.all() but returns array of errors even for filure 

3) Promise.race()

- looks for first settked promise (eithe succes of failure ) so returns promise of success or failure not array 

- returns result of first settled promise (either value or error) 

4) Promise.any()

- success sekking first gets returns if all error returens aggreagte error in array


*/

const p1 = new Promise(function (resolve, reject) {
  // setTimeout(() => resolve("p1 success"), 3000);
  setTimeout(() => reject("p1 failed"), 3000);
});
const p2 = new Promise(function (resolve, reject) {
  //   setTimeout(() => resolve("p2 success"), 1000);
  setTimeout(() => reject("p2 failed"), 1000);
});
const p3 = new Promise(function (resolve, reject) {
  //   setTimeout(() => resolve("p3 success"), 2000);
  setTimeout(() => reject("p3 failed"), 2000);
});

Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => {
    console.error(err);
    console.log(err.errors);// for promise.any if all fail we get aggregate error in a aray to access that array we get oit in object with errors as key 
  });
