const _ = require("lodash"); 


_.map = function(list, callback){
		var storage= [];						  //create an empty arrat to store
	// 	for (var i=0; i < list.length; i++) {     //check if array

	// 	storage.push(callback(list[i], i, list)); //callback(element)
	// 											  //push it to our array
	// }

	_.each(list, function(v, i, list) {
		storage.push(callback(v, i, list))			//value,index list

	})	

	return storage;                          	  //return []

}	

_.map([1,2,3], function(val) {return val + 1;})   //will return [2,3,4]


_.each = function(list, callback) {		//list is the array 

	if(Arrya.isArray(list)){           //.isArray tells wheather it is an array or not (true)
		                               //loop through the length of the list which is  an array 
		for (var i=0; i < list.length;  i++) {

		}
									   //call the callback with a list item
		callback(list[i], i, list);		//i is 0 at first which is mior
	} else  { // object
									   //loop through object
		for (var key in list){
										//call the callback with a list item

		callback(list[key], key, list)
		}							

	}


}
_.each['mior','haily','rumi'], function(name, i, list) {  //callback is this entire function 
	if (list[i + 1]) {  				   				  //loop through if there is a item after current index 
		console.log(name, 'is younger than', list[i+1])
	} else {
		console.log(name, 'is the oldest')
	}

}
