// https://dev.to/tolobayo/javascript-event-loop-everything-you-need-to-know-explained-in-simple-terms-fg0

// 1st Try
// function a() {
//   console.log("a");
// }

// a();

// console.log("End");

// setTimeout example

// console.log("start");

// setTimeout(function cb() {
//   console.log("CallBack");
// }, 5000);

// console.log("End");

// DOM API Async JS

// console.log("Start");

// document.getElementById("clickme").addEventListener("click", function cb() {
//   console.lo("Callback");
// });

// console.log("End");

// SetTimeOut Along with fetch API

console.log("start");

setTimeout(function cbT() {
  console.log("CB SetTimeout");
}, 5000);

fetch("https://api.netflix.com").then(function cbF() {
  console.log("CB Netflix");
});

console.log("End");
