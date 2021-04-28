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
var randomLoop = function(random) {
	for (var i =0;i < random.random1.length; i++) {
		console.log('outer loop')
		for (var key in random.random1[i]){
			console.log('inner loop')
			if (random.random1[i][key]=== "m") {
				console.log('found \' em.!')
			}  else {
				console.log('next time!');
			}
		}
	}
}

randomLoop(random);

// outer loop
// inner loop
// found ' em.!
// inner loop
// next time!
// outer loop
// inner loop
// next time!
// inner loop
