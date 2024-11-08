// I.e Writing Bind function from scratch

let name = {
  firstName: "Akshay",
  lastName: "Saini",
};

let printName = function (hometown, state, country) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " , " +
      hometown +
      " , " +
      state +
      " , " +
      country
  );
};

printMyName = printName.bind(name, "Dehadrun", "uttarakhand");

printMyName("India");

//

Function.prototype.mybind = function (...args) {
  let obj = this,
    params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.mybind(name, "Bangalore", "Karnataka");
printMyName2("India");
