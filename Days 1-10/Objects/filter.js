//learning .filter
const _ = require("lodash"); 

_.filter = function(arr, cb){
	//create a new array
	const storage = [];
	//loop through the array
	_.each(arr, function(item,i, list) {
		//checkif cb returns true
		if (cb(item, i, list) === true)
		//if retrun true, push into arr
		storage.pusg(item)
	});
	//loop through the array
	for (let i=0;i< arr.length; i++) {
		//checkif cb returns true
		if (cb(arr[i],i,  arr) === true)
		//if retrun true, push into arr
		storage.push(arr[i])
	};
	//returns arr
	return storage; 
}
