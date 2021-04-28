//Destructure this nested data structure into two variables with the strings brown and white
var random = [
	{
		name:"m",
		color:"brown"
	},{  
		name:"mir",
		color:"white"
	}
	]


var {color, color2} =  [random[0].color, random[1].color];


var  [{color:firstColor},{color: secondColor}] =  random;


