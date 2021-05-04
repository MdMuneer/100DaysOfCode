//passing arguments

var increment= function(n) { return n+1; };
var square = function(n){ return n*n; };
var doMathDontHaveTo  = function(n, func) { return func(n);};
console.log(doMathDontHaveTo(5,  square));
console.log(doMathDontHaveTo(4, increment));

//converting into es6  

const increment = (n) => {return n+1};
const square= (n)=> {return n*n;};
const doMathDontHaveTo = (n, func)=> { return func(n); };