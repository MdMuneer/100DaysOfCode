function greatThanFive(arr){
	let newArr = [];
	for (var i =0; i < arr.length; i ++) {
		if (arr[i] > 5){
			 newArr.push(arr[i])
		}
	}
	return newArr
}

console.log(greatThanFive([1,7,1,10,8]))