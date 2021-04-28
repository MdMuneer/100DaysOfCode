//giving error
const _ = require("lodash"); 

function CreateSuspectObjects (name) {
	return{
		name:name,
		color:name.split(' ')[1],
		speak() {log(`my name is ${name}`);}
	};
};

var suspects = ['miss scarlet','colonel Mustard','Mr. White'];

var suspectsList = [];

_.each(suspects, function(name) {
	suspectsList.push(CreateSuspectObjects(name));
});

console.log(suspectsList)