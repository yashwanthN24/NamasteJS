console.log("start");

setTimeout(function cb() {
  console.log("CallBack");
}, 5000);
// Waits for atleast 5s or more than that only because of the way Asynchronous Part is handled By JS enginer i.e processing of
// setTimeout callback function by adding it to Callback queue once it completes its execution and Through event loop
// Adding this Callback Function from CallBack queue into The Call Stack

console.log("end");

//

let startDate = new Date().getTime();
let endDate = startDate;

while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("while expired");
