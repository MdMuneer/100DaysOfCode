const creatTuple = (a,b,c,...d) => {	 //... is spread operator
	return console.log([[a,c],[b,d]]);
}

creatTuple('it','be','could','anyone','no one');
