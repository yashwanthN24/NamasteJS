setTimeout(function () {
  console.log("timer"); // and this line in Sources Call Stack
}, 1000);

function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("y"); // breakpoint at this line
});
