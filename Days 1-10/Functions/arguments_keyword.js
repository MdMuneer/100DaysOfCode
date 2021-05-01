const creatTuple = function(a,b,c,...d) {
	console.log(arguments)	;
	return ([[a,c],[b,d]]);
}

creatTuple('it','be','could','anyone','no one');