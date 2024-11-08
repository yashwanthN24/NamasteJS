// document.querySelector("#Grandparent").addEventListener(
//   "click",
//   () => {
//     console.log("Grandparent Clicked");
//   },
//   false
// );

// document.querySelector("#parent").addEventListener(
//   "click",
//   () => {
//     console.log("Parent Clicked");
//   },
//   false
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("Child Clicked");
//   },
//   false
// );

// Third Argument not passed or set to false is the same Event bubbling only takes place

// document.querySelector("#Grandparent").addEventListener("click", () => {
//   console.log("Grandparent Clicked");
// });

// document.querySelector("#parent").addEventListener("click", () => {
//   console.log("Parent Clicked");
// });

// document.querySelector("#child").addEventListener("click", () => {
//   console.log("Child Clicked");
// });

// Event Trickling (Event Capturing) happens
// document.querySelector("#Grandparent").addEventListener(
//   "click",
//   () => {
//     console.log("Grandparent Clicked");
//   },
//   true
// );

// document.querySelector("#parent").addEventListener(
//   "click",
//   () => {
//     console.log("Parent Clicked");
//   },
//   true
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("Child Clicked");
//   },
//   true
// );

// Normal Flow of Events Propogation
// - First Event Capturing happens
// - Then Event Bubbling Happens

// document.querySelector("#Grandparent").addEventListener(
//   "click",
//   () => {
//     console.log("Grandparent Clicked");
//   },
//   true
// ); // Capturing

// document.querySelector("#parent").addEventListener(
//   "click",
//   () => {
//     console.log("Parent Clicked");
//   },
//   false
// ); // Bubbling

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("Child Clicked");
//   },
//   true
// ); // Capturing

// document.querySelector("#Grandparent").addEventListener(
//   "click",
//   () => {
//     console.log("Grandparent Clicked");
//   },
//   true
// );

// document.querySelector("#parent").addEventListener(
//   "click",
//   () => {
//     console.log("Parent Clicked");
//   },
//   false
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("Child Clicked");
//   },
//   false
// );

// STOPPING THE EVENT PROPOGATION THROUGH e.stopPropagation()

// document.querySelector("#Grandparent").addEventListener(
//   "click",
//   () => {
//     console.log("Grandparent Clicked");
//   },
//   false
// );

// document.querySelector("#parent").addEventListener(
//   "click",
//   () => {
//     console.log("Parent Clicked");
//   },
//   false
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   (e) => {
//     console.log("Child Clicked");
//     e.stopPropagation();
//   },
//   false
// );

// document.querySelector("#Grandparent").addEventListener(
//   "click",
//   (e) => {
//     console.log("Grandparent Clicked");
//     e.stopPropagation();
//   },
//   true
// );

// document.querySelector("#parent").addEventListener(
//   "click",
//   () => {
//     console.log("Parent Clicked");
//   },
//   true
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("Child Clicked");
//   },
//   true
// );

document.querySelector("#Grandparent").addEventListener(
  "click",
  (e) => {
    console.log("Grandparent Clicked");
    e.stopPropagation();
  },
  true
);

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("Parent Clicked");
  },
  true
);

document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("Child Clicked");
  },
  true
);
