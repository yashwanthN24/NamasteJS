console.log("start");

setTimeout(function cb() {
  console.log("callBack");
}, 0);

console.log("end");

/*

  Output: 

    start 
    end 
    callback 

*/
