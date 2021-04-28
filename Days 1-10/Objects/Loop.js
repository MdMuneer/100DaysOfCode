const random = {

	'random1' : [
	{
		name:"m",
		color:"brown"
	},{
		name:"mir",
		color:"white"
	}
	]
}

function foo() {
	for  (let i=0; i< random.random1.length; i++) { //random.length could not be used becasue there is no length 
		console.log(random.random1[i]);  //random[0] becasue there is nothing at random.0

	}
}
foo();

