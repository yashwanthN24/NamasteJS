/*

map , filter and reduce are higher order functions in JS 




*/

// Map

const arr = [5, 1, 3, 2, 6];

// Double - [10 , 2 , 6 , 4 , 12]

// Triple - [15 , 3 , 9 , 6 , 10]

// Binary - ["101" , "1" , "11" , "10" , "110"]

function double(value) {
  return value * 2;
}

function triple(value) {
  return value * 3;
}

function Binary(value) {
  return value.toString(2);
}

// const output = arr.map(Binary);

// const output = arr.map(function Binary(value) {
//   return value.toString(2);
// });

// const output = arr.map(function (value) {
//   return value.toString(2);
// });

// const output = arr.map((value) => {
//   return value.toString(2);
// });

const output = arr.map((value) => value.toString(2));

console.log(output);

// Filter is used to filter values from an Array

// Filter odd values

function isOdd(x) {
  return x % 2; // 0 is false in js rest all are truthy in JS
}

function isEven(x) {
  return x % 2 === 0;
}

function greaterThan4(x) {
  return x > 4;
}

// const oddvalues = arr.filter(greaterThan4);

const oddvalues = arr.filter((x) => x > 4);

console.log(oddvalues);

// Reduce

// Sum or Max

// arr.reduce()

function findSum(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }

  return sum;
}

console.log(findSum([1, 2, 7]));

function findMax(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
  }

  return max;
}

console.log(findMax([1, 23, 58, 90]));

let finalValue = arr.reduce(function (acc, curr) {
  return acc + curr;
}, 0);

console.log(finalValue);

let final = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);

console.log(final);
