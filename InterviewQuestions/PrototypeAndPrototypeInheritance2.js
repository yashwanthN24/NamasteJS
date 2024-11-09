let object = {
  name: "Akshay",
  city: "Dehradun",
  getIntro: function () {
    console.log(this.name + " from " + this.city);
  },
};

let object2 = {
  name: "Aditya",
};

// Never do this

object2.__proto__ = object;

// Setting new properties or methods to function's  __proto__

Function.prototype.mybind = function () {
  console.log("Helojhbfhesdhfbhjbf");
};

function fun() {}

// Now all functions created can access that myBind method through prototype inheritance
