const users = [
  { firstName: "akshay", lastName: "saini", age: 35 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "Tony", lastName: "Stark", age: 23 },
];

// List of fullNames
// ["akshay saini" , "donald trump" , ... ]

// const output = users.map(function (obj) {
//   return obj.firstName + " " + obj.lastName;
// });

// const output = users.map((obj) => obj.firstName + " " + obj.lastName);
// console.log(output);

// acc = { 26 : 1 , 75 : 1}

const outpu = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = acc[curr.age] + 1;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(outpu);

// Chaining Map , filter and reduce

const output = users.filter((x) => x.age > 30).map((obj) => obj.firstName);

console.log(output);

const finalValue = users.reduce(function (acc, curr) {
  if (curr.age > 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(finalValue);
