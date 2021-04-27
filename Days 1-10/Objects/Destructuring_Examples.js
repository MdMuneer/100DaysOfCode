//swap with temp
var a= 1, b =2;

var temp = a
a=b
b=temp
console.log(a,b)


//Advance Deep Arrays
var [a,[b, [c,d]]]= [1,[2,[[[3,4], 5],6]]];
console.log("a:",a, "b:", b, "c:",c, "d:",d);

//dont try crazy nested array destructuring