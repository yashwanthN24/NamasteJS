// sum(1)(2)(3)(4)............(n) 

function sum(a){
   return function second(b) {
          if(b){
             return sum(a+b);
          }
          return a;
  }
}


console.log(sum(1)(2)(3)(4)());// 10


//or

let sum2 = (a) => (b) => b ? sum2(a+b) : a;
