//Non-valid Characters
var box = {};
box['material']="cardboard";
box[0]='meow';
box['^&']="testing 123";

var test = box['^&'];

console.log(box); 
