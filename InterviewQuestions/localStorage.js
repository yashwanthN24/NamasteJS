console.log(window.localStorage);
console.log(localStorage);
console.log(this.localStorage);

localStorage.setItem("Hello", "world");

const value = localStorage.getItem("Hello");

console.log(value);
console.log(typeof value);

localStorage.removeItem("Hello");

// To clear full localstorage

localStorage.clear();

// To store object on local storage we have a problem

const user = { name: "akshay" };

localStorage.setItem("user", user);

console.log(String(user));

// To store objects on Local Storage we use JSON.stringify(user);

localStorage.setItem("User-copy", JSON.stringify(user));

let objString = localStorage.getItem("User-copy");
console.log(typeof objString);

console.log(objString);

// To get actual object from JSON.string we use JSON.parse(objString)

console.log(JSON.parse(objString));

// make small  own function to do all these getitems and setItems from localstorage
// It saves ur time just can call those functions
