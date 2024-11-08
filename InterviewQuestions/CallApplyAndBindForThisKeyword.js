let name = {
  firstName: "Akshay",
  lastName: "Saini",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + " , " + state
  );
};

printFullName.call(name, "Dehradun", "Uttarakhand");

let name2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

// function borrowing

printFullName.call(name2, "Mumbai", "Maharashtra");

printFullName.apply(name2, ["Mumbai", "Maharashtra"]);

let printMyName = printFullName.bind(name2, "Mumbai", "Maharasthra");

console.log(printMyName);
printMyName();
