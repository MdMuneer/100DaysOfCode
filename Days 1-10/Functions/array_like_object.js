const constructArr = function(){
	const arr = Array.prototype.slice.call(arguments); //make array like objects and make it an array //in es6 Array.from(arguments)
	arr.push('the soocer room?');
	return arr.join(' ');
};

console.log(constructArr('was','it','in'));


