var list =['a','b','c'];

console.log(list.reduce(function(accumulator,letter) {
	return accumulator + letter.toUpperCase()
},''))
//'' is a seed value
