// https://api.github.com/

const API_URL = "https://api.github.com/users/yashwanthN24";

async function handlePromise() {
  const data = await fetch(API_URL);
  // fetch function returns a promise when on resolved gives a Response object which has a body that is a Readable Stream
  // To convert this Readable Stream to json we use .json() method on Response object

  // This Response.json() is again a Promise which on resolved gives the result i.e JSON Value

  // fetch()  => Response => Response.json()

  // In Simple words,

  // fetch() => Response.json() => jsonValue

  const jsonValue = await data.json();

  console.log(jsonValue);
}

// Error Handling - we will use try-catch to catch errors in Async Function

// Wrap await codes inside try block

// async function handlePromise() {
//   try {
//     const data = await fetch(API_URL);
//     const jsonValue = await data.json();
//     console.log(jsonValue);
//   } catch (err) {
//     console.log(err);
//   }
// }
// handlePromise();

// Other way is older way as we know async function always returns a Promise

// can do this

handlePromise().catch((err) => console.log(err));
