let name = {
  firstName: "Akshay",
  lastName: "Saini",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + " , " + state
  );
};

// 1st argument is reference to this what should this refer to same for apply as well as bind 
printFullName.call(name, "Dehradun", "Uttarakhand");

let name2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

// function borrowing

printFullName.call(name2, "Mumbai", "Maharashtra");

// apply same as call but the argument for the function passed in array 
printFullName.apply(name2, ["Mumbai", "Maharashtra"]);

// unlike call and apply which diectly return the result thisreturns a callable function 
// which can be called later 
let printMyName = printFullName.bind(name2, "Mumbai", "Maharasthra");

console.log(printMyName);
printMyName();
