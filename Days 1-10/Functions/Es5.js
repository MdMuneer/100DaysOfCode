// setting default parameter in es5

const add=  function(a,b){
	b=b || 5;			    //or operator ifb = a value  if not b = 2
	console.log(arguments);
	return a+b ;
};

add(3);