// let btn = document.getElementById("clickme");

// function attachEventListener() {
//   let count = 0;
//     btn.addEventListener("click", function xyz() {
//         console.log("Button Clicked", ++count);
//     });
// }

// attachEventListener();

// Garbage Collection & removeEventListeners

// RemovingEventListeners allows the closed variables held by closures of callback function of event Listener
// To be garbage collected by the Garbage collector of JS engine

let btn = document.getElementById("clickme");

function attachEventListener() {
  let count = 0;

  function handleClick() {
    console.log("Button Clicked", ++count);
  }

  // Attach the event listener
  btn.addEventListener("click", handleClick);

  // Remove the event listener after 10 seconds
  setTimeout(() => {
    btn.removeEventListener("click", handleClick);
    console.log("Event listener removed");
  }, 10000);
}

attachEventListener();
