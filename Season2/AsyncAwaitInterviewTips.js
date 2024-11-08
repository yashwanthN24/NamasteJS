/* what is async -await ?

-async is a keyword and is used with functions 
-async functions are different from normal functions 
-await can be used only inside an async function To handle promises 


async Function what difference from normal function 

    -async function always returns a Promise 
    - If instead of promise u return any value , The function automatically wraps
      that value inside a promise and returns that promise 
    - So eventually async function always returns a promise (directly or indirectly)


    - what is await ?
        async and await are used to handle Promises









     fetch function returns a promise when on resolved gives a Response object which has a body that is a Readable Stream
   To convert this Readable Stream to json we use .json() method on Response object

   This Response.json() is again a Promise which on resolved gives the result i.e JSON Value

   fetch()  => Response => Response.json()

   In Simple words,

    fetch() => Response.json() => jsonValue




    working of async function 

    -await is a keyword that only can be used inside an async function

 we write await before a promise and it resolves the promise

 JS Doesn't wait for anyone it rather suspends the function execution when it see await and waits till that Promise gets resolved and then continues the execution  from the same line it has left while suspending of that function

 This is done by pushing and poping of that function's execution context into the call stack

*/

/*


    Async-Await v/s Promise.then().catch()

    -Async-Await is just a syntactic sugar over .then().catch()
    -Behind the scenes Async-await uses Promise.then().catch() only
    
    -Async -await is the modern way of writing things and is more clear as well and also 
     avoids promise chaining 


    So prefer using Async - Await 
    for handling errors any way is fine 


  async function handlePromise(){
    
    const data = await fetch(API_URL); 
    const jsonValue = await data.json();// this line executes only after completion of previous line till that gets resolved 

    console.log(jsonValue);
  
  
  }
  


*/
