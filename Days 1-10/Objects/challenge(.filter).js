//filtering out  who was present in the room
const _ = require("lodash"); 
const videoData = [
	{
		name:'Mr mir',		//first item in the is this object
		present:true,
		rooms: [
		{kitchen:false},
		{ballroom:false},
		{conservatory:false},
		{'dining room':false},
		{'billiard room': false},
		{library:false}

		]
	},
	{
		name:'Mr white',
		present:false,
		rooms: [
		{kitchen:false},
		{ballroom:false},
		{conservatory:false},
		{'dining room':false},			
		{'billiard room': false},
		{library:false}

		]
	},
	{
		name:'Mr Don',
		present:false,
		rooms: [
		{kitchen:false},
		{ballroom:false},
		{conservatory:false},
		{'dining room':false},
		{'billiard room': false},
		{library:false}

		]
	},
	{
		name:'Mrs tim',
		present:true,
		rooms: [
		{kitchen:false},
		{ballroom:false},
		{conservatory:false},
		{'dining room':false},
		{'billiard room': false},
		{library:false}

		]
	}

]

_.filter = function(arr, cb){		//function is called by each item in the arr
	//create a new array
	const storage = [];
	//loop through the array
	_.each(arr, function(item, i, list) {
		//checkif cb returns true 	//if retrun true, push into arr
		if (cb(item, i, list)) {storage.push(item);}	//return arr of  objects
		
	});
		//returns arr
	return storage; 
}

const suspects = _.filter(videoData, function(suspectObject) {		//cb is this function
	return suspectObject.present; 
});

const suspectsName = _.map( suspects, suspect => {
	return suspect.name;
})

console.log(suspects)