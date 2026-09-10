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

localStorage.removeItem("user");
localStorage.removeItem("User-copy");

function getItemFromLocalStorage(key) {
  let val = localStorage.getItem(key);
  if (typeof val === "object") {
    return JSON.parse(val);
  }
  return val;
}

function setItemToLocalStorage(key, value) {
  if (typeof value === "object") {
    localStorage.setItem(key, JSON.stringify(value));
    return;
  }

  localStorage.setItem(key, value);
}

setItemToLocalStorage("user", { name: "yash" });

setItemToLocalStorage("Age", 45);

console.log(getItemFromLocalStorage("Age"));

localStorage.clear();

/*

Different typs of Storage API via window  object from browser (WEB API's) 

- sessionStorage : per seession data i.e when user closes the tab or the window (browser) the data is removed 
  unlike cookies these are not sent to server via http request so better 
  session storage can storeg large amoun t of ddata as compared to cookies 
  cookies are sent for every htpp request between browser and server 

- localstorage also same as session storagebut it doesnot have expiry it stays even when window or browser closed even if system is shutdoen 
- localstorage has the memeory capcity allowing to stoire maximum emory datapossible as compared to sessionStorage

- usewr preferences stored inlocalstorage so that easy to pick it up[ from users browser itself rather tahn api call each time 
- this allows to keep user specific daat in their own browser localstorage 

  localstorage is specific to each orgini 
  origin = protocol (http/https) + domain + port 

  so https://www.akshaysaini localstorage is different from https://b;log.akshaysiani as domain changed it s a subdomian 

  localstorage is specific to the origin i,e protocol + domain + port 

  This is called same origin policy 

*/
