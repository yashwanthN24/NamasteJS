/*


Promise.all(); 

- To do Parallel API Calls  and get results 


Promise.all([p1 , p2 , p3]); => gives a result array [ val1 , val2 , val3] after 3s
              3s , 2s , 1s

waits for all of them to finish


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
    console.log(err.errors);
  });
