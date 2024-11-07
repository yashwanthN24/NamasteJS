const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const Diameter = function (radius) {
  return 2 * radius;
};

const radius = [3, 1, 2, 4];

// const calculate = function (radius, logic) {
//   const output = [];

//   for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   }

//   return output;
// };

Array.prototype.calculate = function (logic) {
  const output = [];

  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }

  return output;
};

// console.log(calculate(radius, area));

// console.log(calculate(radius, circumference));

// console.log(calculate(radius, Diameter));

const result = radius.map(Diameter);
console.log(result);

console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
